package conference.DbControllers;

import conference.Objects.Conference;

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
public class DbConferencesController {

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

    private List<Conference> executeQuery(Connection connection, String query) {
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

    private void updateQuery(Connection connection, String query) {
        try{
            Statement statement = connection.createStatement();
            statement.executeUpdate(query);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Conference getConferenceById(int id) {
        Connection connection = connect().orElse(null);
        String query = "SELECT * FROM conferences WHERE conference_id=" + id;
        List<Conference> conferences = executeQuery(connection, query);
        return  conferences.size() > 0 ? conferences.get(0) : null;
    }

    public List<Conference> getConferencesByRoomId(int id) {
        Connection connection = connect().orElse(null);
        String query = "SELECT * FROM conferences WHERE FK_room_id=" + id;
        return executeQuery(connection, query);
    }

    public void deleteConferenceById(int id) {
        Connection connection = connect().orElse(null);
        String query = "DELETE FROM conferences WHERE conference_id=" + id;
        updateQuery(connection, query);
    }

}
