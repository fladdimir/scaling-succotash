package succotash;

import io.micronaut.data.annotation.Repository;
import io.micronaut.data.repository.CrudRepository;

@Repository
public interface RgbColorRepository extends CrudRepository<RgbColor, Long> {

}
