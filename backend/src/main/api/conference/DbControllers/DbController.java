package conference.DbControllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.Optional;

/**
 * Created by rain on 19/02/2017.
 */
public class DbController {
    private final String driver = "org.sqlite.JDBC";
    private final String dbName = "database/database.db";
    private final String dbUrl = "jdbc:sqlite:" + dbName;

    protected Optional<Connection> connect() {
        try {
            Class.forName(driver);
            return Optional.of(DriverManager.getConnection(dbUrl));
        } catch (Exception e) {
            return Optional.empty();
        }
    }

    protected ResponseEntity<String> updateDatabase(Connection connection, String query) {
        try{
            Statement statement = connection.createStatement();
            statement.executeUpdate(query);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
