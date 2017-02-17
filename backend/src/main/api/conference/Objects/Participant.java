package conference.Objects;

/**
 * Created by rain on 16/02/2017.
 */
public class Participant {

    private int participantId;
    private String participantName;
    private String participantDate;
    private int conferenceId;

    public Participant(int participantId, String participantName, String participantDate, int conferenceId) {
        this.participantId = participantId;
        this.participantName = participantName;
        this.participantDate = participantDate;
        this.conferenceId = conferenceId;
    }

    public int getParticipantId() {
        return participantId;
    }

    public void setParticipantId(int participantId) {
        this.participantId = participantId;
    }

    public String getParticipantName() {
        return participantName;
    }

    public void setParticipantName(String participantName) {
        this.participantName = participantName;
    }

    public String getParticipantDate() {
        return participantDate;
    }

    public void setParticipantDate(String participantDate) {
        this.participantDate = participantDate;
    }

    public int getConferenceId() {
        return conferenceId;
    }

    public void setConferenceId(int conferenceId) {
        this.conferenceId = conferenceId;
    }
}
