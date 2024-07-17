package scenarios;

import framework.TestBase;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;

import java.util.concurrent.TimeUnit;

import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.hamcrest.Matchers.lessThan;

public class RickAndMortyRest extends TestBase {

    @Test
    public void shouldReturnCharacters() {
        RestAssured.get(character())
                .then().statusCode(200)
                .assertThat().body(matchesJsonSchemaInClasspath("jsonSchemas/rest/allCharacters.json").using(jsonSchemaFactory()))
                .and().time(lessThan(1L), TimeUnit.SECONDS);
    }

    @Test
    public void shouldReturnSingleCharacter() {
        RestAssured.get(character(2))
                .then().statusCode(200)
                .assertThat().body(matchesJsonSchemaInClasspath("jsonSchemas/rest/singleCharacter.json").using(jsonSchemaFactory()))
                .and().time(lessThan(1L), TimeUnit.SECONDS);
    }

    @Test
    public void shouldErrorWhenCharacterIDOutOfBounds() {
        Response response = RestAssured.get(character());
        JsonPath jsonPath = response.jsonPath();
        int characterCount = getCharacterCount();
        RestAssured.get(character(characterCount + 1))
                .then().statusCode(404)
                .and().time(lessThan(1L), TimeUnit.SECONDS);
    }

    private int getCharacterCount() {
        Response response = RestAssured.get(character());
        JsonPath jsonPath = response.jsonPath();
        return jsonPath.get("info.count");
    }
}
