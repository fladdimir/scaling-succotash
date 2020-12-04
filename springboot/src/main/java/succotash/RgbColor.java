package succotash;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class RgbColor {

    @Id
    private long id;

    private int r = 0;
    private int g = 0;
    private int b = 0;
    private int max = 255;

    public RgbColor(long id, int r, int b, int g, int max) {
        // lombok generated java classes are not immediately visible to kotlin...
        this.id = id;
        this.r = r;
        this.b = b;
        this.g = g;
        this.max = max;
    }
}
