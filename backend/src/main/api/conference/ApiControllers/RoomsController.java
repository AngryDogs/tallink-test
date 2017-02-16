package conference.ApiControllers;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import conference.DbController.DbController;
import conference.Objects.Room;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RoomsController {

    @RequestMapping(value = "/rooms")
    public ResponseEntity<List<Room>> getAllRooms() {
        return new ResponseEntity<>(new DbController().getRooms(), HttpStatus.OK);
    }
}