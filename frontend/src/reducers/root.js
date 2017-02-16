import { combineReducers } from 'redux';
import allRooms from './allRoomsReducer';
import singleRoom from './singleRoomReducer';
import singleConference from './singleConferenceReducer';

export default combineReducers({
  allRooms,
  singleRoom,
  singleConference
});
