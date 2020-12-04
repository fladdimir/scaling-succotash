package succotash;

import javax.inject.Inject;
import javax.validation.Valid;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Body;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.Put;

@Controller("/rgbColors")
public class RgbColorController {

    @Inject
    RgbColorRepository repository;

    @Get("/{id}")
    public HttpResponse<RgbColor> findById(Long id) {
        return repository.findById(id).map(c -> HttpResponse.ok(c)).orElse(HttpResponse.notFound());
    }

    @Put("/{id}")
    public HttpResponse<RgbColor> update(Long id, @Body @Valid RgbColor color) {
        color.setId(id);
        RgbColor savedColor = repository.update(color);
        return HttpResponse.ok(savedColor);
    }

}
