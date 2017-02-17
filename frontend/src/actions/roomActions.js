import { getRoomById, getAllRooms } from '../connections/connections';

export const RECIVED_ROOM = 'RECIVED_ROOM';
export const RECIVE_ROOMS = 'RECIVE_ROOMS';
export const DELETE_ROOM = 'DELETE_ROOM';
export const WAITING_DELETE = 'DELETE_ROOM';


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
