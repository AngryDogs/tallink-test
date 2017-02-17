const initialState = {
  rooms: [],
  currentRoom: {
    location: '',
    roomName: '',
    conferences: [],
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
    default:
      return state;
  }
}
