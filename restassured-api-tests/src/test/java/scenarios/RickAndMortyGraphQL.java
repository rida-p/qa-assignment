package scenarios;

import framework.TestBase;
import framework.graphQL.GraphQLQuery;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import org.junit.jupiter.api.Test;

import java.util.concurrent.TimeUnit;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.hamcrest.Matchers.lessThan;

public class RickAndMortyGraphQL extends TestBase {

    @Test
    public void shouldReturnCharacters() {
        GraphQLQuery query  = new GraphQLQuery();
        query.setQuery("""
                {
                    characters {
                        info {
                            count
                            pages
                            next
                            prev
                        }
                    }
                }
                """);

        given()
            .contentType(ContentType.JSON)
            .body(query)
        .when()
            .post(graphQLBaseUrl()).peek()
        .then()
            .assertThat()
            .statusCode(200)
        .and()
            .assertThat().body(matchesJsonSchemaInClasspath("jsonSchemas/graphql/queryAllCharacters.json").using(jsonSchemaFactory()))
        .and()
            .time(lessThan(1L), TimeUnit.SECONDS);
    }

    @Test
    public void shouldReturnSingleCharacterData() {
        GraphQLQuery query  = new GraphQLQuery();
        query.setQuery("""
                {
                    characters {
                        info {
                            count
                            pages
                            next
                            prev
                        }
                    }
                }
                """);

        given()
            .contentType(ContentType.JSON)
            .body(query)
        .when()
            .post(graphQLBaseUrl()).peek()
        .then()
            .assertThat()
            .statusCode(200)
        .and()
            .assertThat().body(matchesJsonSchemaInClasspath("jsonSchemas/graphql/querySingleCharacterWithId.json").using(jsonSchemaFactory()))
        .and()
            .time(lessThan(1L), TimeUnit.SECONDS);
    }

    @Test
    public void shouldErrorWhenCharacterIDOutOfBounds() {
        int characterCount = getCharacterCount();

        GraphQLQuery characterDetailsQuery = new GraphQLQuery();
        characterDetailsQuery.setQuery(String.format("""
                {
                    character(id: %d) {
                        name
                        status
                        species
                        gender
                        image
                        episode {
                            id
                            name
                            air_date
                            episode
                            created
                        }
                        created
                    }
                }
                """, characterCount + 1));

        given()
            .contentType(ContentType.JSON)
            .body(characterDetailsQuery)
        .when()
            .post(graphQLBaseUrl()).peek()
        .then()
            .assertThat()
            .statusCode(200)
        .and()
            .assertThat().body(matchesJsonSchemaInClasspath("jsonSchemas/graphql/queryNoCharactersReturned.json").using(jsonSchemaFactory()))
        .and()
            .time(lessThan(1L), TimeUnit.SECONDS);
    }

    private int getCharacterCount() {
        GraphQLQuery query = new GraphQLQuery();
        query.setQuery("""
                {
                    characters {
                        info {
                            count
                            pages
                            next
                            prev
                        }
                    }
                }
                """);
        Response response = RestAssured.given().contentType(ContentType.JSON)
                .body(query).when().post(graphQLBaseUrl());

        JsonPath jsonPath = response.jsonPath();
        return jsonPath.get("data.characters.info.count");
    }
}
