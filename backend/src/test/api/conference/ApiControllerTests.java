package conference;

/**
 * Created by rain on 19/02/2017.
 */

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static io.restassured.RestAssured.delete;
import static io.restassured.RestAssured.get;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class ApiControllerTests {

    @Test
    public void testGetAllRoomsStatus() throws Exception {
        get("/rooms/all").then().statusCode(200);
    }

    @Test
    public void testGetRoomByIdStatus() throws Exception {
        get("/rooms/13").then().statusCode(200);
    }

    @Test
    public void testGetConferenceByIdStatus() throws Exception {
        get("/rooms/13/conference/43").then().statusCode(200);
    }


    @Test
    public void testAllRoomsContent() throws Exception {
        get("/rooms/all").then().body("[0]", hasKey("roomId")).
                body("[0]", hasKey("maxSeats")).
                body("[0]", hasKey("location")).
                body("[0]", hasKey("roomName")).
                body("[0]", hasKey("conferences"));
    }

    @Test
    public void testGetRoomByIdContent() throws Exception {
        get("/rooms/13").then().body("", hasKey("roomId")).
                body("", hasKey("maxSeats")).
                body("", hasKey("location")).
                body("", hasKey("roomName")).
                body("", hasKey("conferences"));
    }

    @Test
    public void testGetConferenceByIdContent() throws Exception {
        get("/rooms/13/conference/55").then().body("", hasKey("conferenceName")).
                body("", hasKey("conferenceId")).
                body("", hasKey("conferenceDate")).
                body("", hasKey("roomId")).
                body("", hasKey("participants"));
    }

    @Test
    public void testDeleteAddParticipant() throws Exception {
        int size = get("/rooms/13/conference/55").then().extract().path("participants.size()");
        given()
                .contentType("application/json")
                .body("{ \"participantName\": \"Testuser\", \"participantDate\": \"2017-06-06\", \"conferenceId\": 55 }")
                .post("/participant/add/");
        get("/rooms/13/conference/55").then().body("participants.size()", is(size + 1));
        String id = get("/rooms/13/conference/55").then().extract().
                path("participants[-1].participantId").toString();
        delete("/participant/delete/" + id);
        get("/rooms/13/conference/55").then().body("participants.size()", is(size));
    }

    @Test
    public void testDeleteAddConference() throws Exception {
        int size = get("/rooms/13/").then().extract().path("conferences.size()");
        given()
            .contentType("application/json")
            .body("{ \"conferenceName\": \"TestConference\", \"conferenceDate\": \"2017-06-06 13:13\", \"roomId\": 13 }")
            .post("/conference/add/").then().statusCode(200);
        get("/rooms/13/").then().body("conferences.size()", is(size + 1));
        String id = get("/rooms/13/").then().extract().
                path("conferences[-1].conferenceId").toString();
        delete("/rooms/13/conference/delete/" + id);
        get("/rooms/13/").then().body("conferences.size()", is(size));
    }

}
