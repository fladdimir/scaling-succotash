package succotash;

import static java.math.BigDecimal.ZERO;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class RgbColor {

    @Id
    private long id;

    private BigDecimal r = ZERO;
    private BigDecimal b = ZERO;
    private BigDecimal g = ZERO;
}
