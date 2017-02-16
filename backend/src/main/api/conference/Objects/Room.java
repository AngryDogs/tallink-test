package conference.Objects;

/**
 * Created by rain on 16/02/2017.
 */
public class Room {

    private int roomId;
    private String roomName;
    private String location;
    private int maxSeats;

    public Room(int roomId, String roomName, String location, int maxSeats) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.location = location;
        this.maxSeats = maxSeats;
    }

    public int getRoomId() {
        return roomId;
    }

    public String getRoomName() {
        return roomName;
    }

    public String getLocation() {
        return location;
    }

    public int getMaxSeats() {
        return maxSeats;
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
