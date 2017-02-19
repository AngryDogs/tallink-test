import { combineReducers } from 'redux';
import roomReducer from './roomReducer';
import conferenceReducer from './conferenceReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  roomReducer,
  conferenceReducer,
  modalReducer,
});
