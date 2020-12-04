package succotash;

import javax.inject.Inject;
import javax.inject.Singleton;

import io.micronaut.context.event.StartupEvent;
import io.micronaut.runtime.event.annotation.EventListener;
import lombok.extern.slf4j.Slf4j;

@Singleton
@Slf4j
public class StartEventListener {

    @Inject
    RgbColorRepository repository;

    @EventListener
    public void createColorEntry(StartupEvent event) {
        if (repository.findById(1L).isEmpty()) {
            var color = new RgbColor(1L, 255, 0, 0, 255);
            log.info("created RgbColor: " + repository.save(color).getId());
        }
    }

}
