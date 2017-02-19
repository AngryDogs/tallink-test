package conference.DbControllers;

import conference.Objects.Room;
import org.springframework.http.ResponseEntity;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * Created by rain on 16/02/2017.
 */
public class DbRoomsController extends DbController {

    private List<Room> pullData(Connection connection, String query) {
        List<Room> rooms = new ArrayList<>();
        try {
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                rooms.add(new Room(
                        resultSet.getInt(1),
                        resultSet.getString(2),
                        resultSet.getString(3),
                        resultSet.getInt(4)
                        ));
            }

        } catch (Exception e) {
            return rooms;
        }
        return rooms;
    }

    public List<Room> getRooms() {
        Connection connection = connect().orElse(null);
        String query = "SELECT * FROM rooms";
        return  pullData(connection, query);
    }

    public Room getRoomById(int id) {
        Connection connection = connect().orElse(null);
        String query = "SELECT * FROM rooms WHERE room_id=" + id;
        List<Room> rooms = pullData(connection, query);
        return  rooms.size() > 0 ? rooms.get(0) : null;
    }

    public ResponseEntity<String> addConferenceToRoom(Map<String, Object> payload) {
        Connection connection = connect().orElse(null);
        String query = "INSERT INTO conferences (conference_name, date_time, FK_room_id) VALUES " +
                "('" + payload.get("conferenceName").toString() + "', '" + payload.get("conferenceDate").toString() + "', " +
                payload.get("roomId").toString()+ ");";
        return updateDatabase(connection, query);
    }
}
