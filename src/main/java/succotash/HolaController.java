package succotash;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import succotash.ValueGetter; // works, but... https://github.com/redhat-developer/vscode-java/issues/531

@RestController
@RequestMapping("/hola")
public class HolaController {

    @GetMapping()
    public String get() {
        var value = new ValueGetter().getValue();
        return "hola: " + value;
    }

}
