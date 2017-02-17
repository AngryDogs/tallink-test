package conference.Objects;

import conference.DbControllers.DbParticipantsController;

import java.util.List;

/**
 * Created by rain on 16/02/2017.
 */
public class Conference {

    private int conferenceId;
    private String conferenceName;
    private String conferenceDate;
    private int roomId;
    private List<Participant> participants;

    public Conference(int conferenceId, String conferenceName, String conferenceDate, int roomId) {
        this.conferenceId = conferenceId;
        this.conferenceName = conferenceName;
        this.conferenceDate = conferenceDate;
        this.roomId = roomId;
        this.participants = new DbParticipantsController().getParticipantByConferenceId(conferenceId);
    }

    public int getConferenceId() {
        return conferenceId;
    }

    public void setConferenceId(int conferenceId) {
        this.conferenceId = conferenceId;
    }

    public String getConferenceName() {
        return conferenceName;
    }

    public void setConferenceName(String conferenceName) {
        this.conferenceName = conferenceName;
    }

    public String getConferenceDate() {
        return conferenceDate;
    }

    public void setConferenceDate(String conferenceDate) {
        this.conferenceDate = conferenceDate;
    }

    public int getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public List<Participant> getParticipants() {
        return participants;
    }

    public void setParticipants(List<Participant> participants) {
        this.participants = participants;
    }
}
