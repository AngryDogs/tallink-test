package conference.DbControllers;

import conference.Objects.Conference;
import org.springframework.http.ResponseEntity;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Created by rain on 16/02/2017.
 */
public class DbConferencesController extends DbController{

    private List<Conference> pullData(Connection connection, String query) {
        List<Conference> conferences = new ArrayList<>();
        try {
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                conferences.add(new Conference(
                        resultSet.getInt(1),
                        resultSet.getString(2),
                        resultSet.getString(3),
                        resultSet.getInt(4)
                ));
            }

        } catch (Exception e) {
            return conferences;
        }
        return conferences;
    }

    public Conference getConferenceById(int id) {
        Connection connection = connect().orElse(null);
        String query = "SELECT * FROM conferences WHERE conference_id=" + id;
        List<Conference> conferences = pullData(connection, query);
        return  conferences.size() > 0 ? conferences.get(0) : null;
    }

    public List<Conference> getConferencesByRoomId(int id) {
        Connection connection = connect().orElse(null);
        String query = "SELECT * FROM conferences WHERE FK_room_id=" + id;
        return pullData(connection, query);
    }

    public ResponseEntity<String> deleteConferenceById(int id) {
        Connection connection = connect().orElse(null);
        String query = "DELETE FROM conferences WHERE conference_id=" + id;
        return updateDatabase(connection, query);
    }

}
