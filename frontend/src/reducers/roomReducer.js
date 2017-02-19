const initialState = {
  rooms: [],
  currentRoom: {
    location: '',
    roomName: '',
    conferences: [],
    maxSeats: 0,
  }
};

export default function roomReducer(state = initialState, { type, ...action }) {
  switch (type) {
    case 'RECIVE_ROOMS':
      return {
        ...state,
        rooms: action.result.data,
      }
    case 'RECIVED_ROOM':
      return {
        ...state,
        currentRoom: action.result.data,
      }
    case 'DELETE_CONFERENCE':
      const newConferences = state.currentRoom.conferences.filter(el => {
        return el.conferenceId !== action.conId;
      });
      return { ...state, currentRoom: {
        ...state.currentRoom,
        conferences: newConferences,
      }};
    case 'ADD_CONFERENCE':
      state.currentRoom.conferences.push(action.payload);
      return {
        ...state,
      };
    default:
      return state;
  }
}
