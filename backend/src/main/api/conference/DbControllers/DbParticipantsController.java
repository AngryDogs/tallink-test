package conference.DbControllers;

import conference.Objects.Participant;

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
public class DbParticipantsController {

    private final String driver = "org.sqlite.JDBC";
    private final String dbName = "database/database.db";
    private final String dbUrl = "jdbc:sqlite:" + dbName;

    private Optional<Connection> connect() {
        try {
            Class.forName(driver);
            return Optional.of(DriverManager.getConnection(dbUrl));
        } catch (Exception e) {
            return Optional.empty();
        }
    }

    private List<Participant> executeQuery(Connection connection, String query) {
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

    private void updateQuery(Connection connection, String query) {
        try{
            Statement statement = connection.createStatement();
            statement.executeUpdate(query);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public List<Participant> getParticipantByConferenceId(int id) {
        Connection connection = connect().orElse(null);
        String query = "SELECT * FROM participants WHERE FK_conference_id=" + id;
        return executeQuery(connection, query);
    }

    public void deleteParticipantById(int id) {
        Connection connection = connect().orElse(null);
        String query = "DELETE FROM participants WHERE participant_id=" + id;
        updateQuery(connection, query);
    }

}
