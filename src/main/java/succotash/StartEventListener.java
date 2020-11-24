package succotash;

import static java.math.BigDecimal.ONE;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class StartEventListener {

    @Autowired
    RgbColorRepository repository;

    @EventListener
    public void createColorEntry(ApplicationReadyEvent event) {
        if (repository.findById(1L).isEmpty()) {
            var color = new RgbColor(1, ONE, ONE, ONE);
            log.info("created RgbColor: " + repository.save(color).getId());
        }
    }

}
