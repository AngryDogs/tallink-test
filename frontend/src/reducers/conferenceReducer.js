const initialState = {
  conferenceName: '',
  conferenceDate: '',
  participants: [],
};


export default function conferenceReducer(state = initialState, { type, ...action }) {
  switch (type) {
    case 'RECIVED_CONFERENCE':
      return {
        ...state,
        conferenceName: action.result.data.conferenceName,
        conferenceDate: action.result.data.conferenceDate,
        participants: action.result.data.participants,
      };
    case 'DELETE_PARTICIPANT':
      const newParticipants = state.participants.filter(el => {
        return el.participantId !== action.id;
      });
      return {
        ...state,
        participants: newParticipants,
      };
    case 'ADD_PARTICIPANT':
      state.participants.push(action.data);
      return { ...state };
    default:
      return state;
  }
}
