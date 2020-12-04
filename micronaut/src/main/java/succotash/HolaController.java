package succotash;

import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;

@Controller("/hola")
public class HolaController {

    @Get(produces = MediaType.TEXT_PLAIN)
    public String get() {
        return "hola";
    }

}
