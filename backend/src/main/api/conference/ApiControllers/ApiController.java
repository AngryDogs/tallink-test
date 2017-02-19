package conference.ApiControllers;

import java.util.List;
import java.util.Map;

import conference.DbControllers.DbConferencesController;
import conference.DbControllers.DbParticipantsController;
import conference.DbControllers.DbRoomsController;
import conference.Objects.Conference;
import conference.Objects.Room;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ApiController {

    @RequestMapping(value = "/rooms/all")
    public ResponseEntity<List<Room>> getAllRooms() {
        return new ResponseEntity<>(new DbRoomsController().getRooms(), HttpStatus.OK);
    }

    @RequestMapping(value = "/rooms/{id}")
    public ResponseEntity<Room> getRoomById(@PathVariable int id) {
        return new ResponseEntity<>(new DbRoomsController().getRoomById(id), HttpStatus.OK);
    }


    @RequestMapping(value = "/rooms/{r_id}/conference/{c_id}")
    public ResponseEntity<Conference> getConferenceById(@PathVariable int r_id, @PathVariable int c_id) {
        return new ResponseEntity<>(new DbConferencesController().getConferenceById(c_id), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value="/rooms/{r_id}/conference/delete/{c_id}", method= RequestMethod.DELETE)
    @ResponseBody
    public ResponseEntity<String> deleteConferenceById(@PathVariable int r_id, @PathVariable int c_id) {
        return new DbConferencesController().deleteConferenceById(c_id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value="/conference/add/", method= RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<String> addConferenceToRoom(@RequestBody Map<String, Object> payload) {
        return new DbRoomsController().addConferenceToRoom(payload);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value="/participant/delete/{id}", method= RequestMethod.DELETE)
    @ResponseBody
    public ResponseEntity<String> deleteConferenceById(@PathVariable int id) {
        return new DbParticipantsController().deleteParticipantById(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value="/participant/add/", method= RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<String> addParticipantToConference(@RequestBody Map<String, Object> payload) {
        return new DbParticipantsController().addParticipant(payload);
    }
}