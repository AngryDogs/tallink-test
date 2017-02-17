package conference.Objects;


import conference.DbControllers.DbConferencesController;

import java.util.List;

/**
 * Created by rain on 16/02/2017.
 */
public class Room {

    private int roomId;
    private String roomName;
    private String location;
    private int maxSeats;
    private List<Conference> conferences;


    public Room(int roomId, String roomName, String location, int maxSeats) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.location = location;
        this.maxSeats = maxSeats;
        this.conferences = new DbConferencesController().getConferencesByRoomId(roomId);
    }

    public int getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getMaxSeats() {
        return maxSeats;
    }

    public void setMaxSeats(int maxSeats) {
        this.maxSeats = maxSeats;
    }

    public List<Conference> getConferences() {
        return conferences;
    }

    public void setConferences(List<Conference> conferences) {
        this.conferences = conferences;
    }

    @Override
    public String toString() {
        return "Room{" +
                "roomId=" + roomId +
                ", roomName='" + roomName + '\'' +
                ", location='" + location + '\'' +
                ", maxSeats=" + maxSeats +
                '}';
    }
}
