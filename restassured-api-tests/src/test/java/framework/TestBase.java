package framework;

import com.github.fge.jsonschema.SchemaVersion;
import com.github.fge.jsonschema.cfg.ValidationConfiguration;
import com.github.fge.jsonschema.main.JsonSchemaFactory;
import lombok.SneakyThrows;

import java.net.URL;

public class TestBase {

    @SneakyThrows
    public URL baseUrl() {
        return new URL("https://rickandmortyapi.com/api");
    }

    @SneakyThrows
    public URL character() {
        return new URL("https://rickandmortyapi.com/api/character");
    }

    @SneakyThrows
    public URL graphQLBaseUrl() {
        return new URL("https://rickandmortyapi.com/graphql");
    }

    @SneakyThrows
    public URL character(int id) {
        return new URL(character().toString() + "/" + id);
    }

    public JsonSchemaFactory jsonSchemaFactory() {
        return JsonSchemaFactory.newBuilder()
                .setValidationConfiguration(
                        ValidationConfiguration.newBuilder()
                                .setDefaultVersion(SchemaVersion.DRAFTV4).freeze())
                .freeze();
    }
}
