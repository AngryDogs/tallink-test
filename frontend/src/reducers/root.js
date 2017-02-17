import { combineReducers } from 'redux';
import roomReducer from './roomReducer';
import conferenceReducer from './conferenceReducer';

export default combineReducers({
  roomReducer,
  conferenceReducer,
});
