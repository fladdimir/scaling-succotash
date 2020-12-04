package succotash;

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
    private Long id;

    private int r = 0;
    private int g = 0;
    private int b = 0;
    private int max = 255;
}
