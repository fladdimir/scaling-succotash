package succotash;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
class SuccotashApplicationTests {

	@Autowired
	RgbColorRepository rgbColorRepository;

	@Test
	void contextLoads() {
	}

	@Test
	void initialDbEntryIsCreated() {
		assertThat(rgbColorRepository.count()).isEqualTo(1L);
	}

}
