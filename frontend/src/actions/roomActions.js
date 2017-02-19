import {
  getRoomById,
  getAllRooms,
  deleteConferenceById,
  addConference
} from '../connections/connections';

const RECIVED_ROOM = 'RECIVED_ROOM';
const RECIVE_ROOMS = 'RECIVE_ROOMS';
const DELETE_CONFERENCE = 'DELETE_CONFERENCE';
const ADD_CONFERENCE = 'ADD_CONFERENCE';


function room(result, type) {
  return { type, result }
}

export function singleRoom(id) {
  return dispatch => {
    getRoomById(id)
      .then(res => {
        dispatch(room(res, RECIVED_ROOM))
      })
    }
}

export function allRooms() {
  return dispatch => {
    getAllRooms()
      .then(res => {
        dispatch(room(res, RECIVE_ROOMS))
      })
    }
}

export function addConferenceToRoom(payload, roomId) {
  return dispatch => {
    addConference(payload).then(res => {
      dispatch({ type: ADD_CONFERENCE, payload });
    }).then(res => {
      getRoomById(roomId)
        .then(res => {
          dispatch(room(res, RECIVED_ROOM))
        });
    });
  }
}

export function deleteConferenceFromRoom(roomId, conId) {
  deleteConferenceById(roomId, conId);
  return dispatch => dispatch({ type: DELETE_CONFERENCE, conId });
}
