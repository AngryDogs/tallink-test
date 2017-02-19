package conference.DbControllers;

import conference.Objects.Participant;
import org.springframework.http.ResponseEntity;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * Created by rain on 16/02/2017.
 */
public class DbParticipantsController extends DbController {


    private List<Participant> pullData(Connection connection, String query) {
        List<Participant> participants = new ArrayList<>();
        try {
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                participants.add(new Participant(
                        resultSet.getInt(1),
                        resultSet.getString(2),
                        resultSet.getString(3),
                        resultSet.getInt(4)
                ));
            }

        } catch (Exception e) {
            return participants;
        }
        return participants;
    }

    public List<Participant> getParticipantByConferenceId(int id) {
        Connection connection = connect().orElse(null);
        String query = "SELECT * FROM participants WHERE FK_conference_id=" + id;
        return pullData(connection, query);
    }

    public ResponseEntity<String> deleteParticipantById(int id) {
        Connection connection = connect().orElse(null);
        String query = "DELETE FROM participants WHERE participant_id=" + id;
        return updateDatabase(connection, query);
    }

    public ResponseEntity<String> addParticipant(Map<String, Object> payload) {
        Connection connection = connect().orElse(null);
        String query = "INSERT INTO participants (name, birth_date, FK_conference_id) VALUES " +
                "('" + payload.get("participantName").toString() + "', '" + payload.get("participantDate").toString() + "', " +
                payload.get("conferenceId").toString()+ ");";
        return updateDatabase(connection, query);
    }

}
