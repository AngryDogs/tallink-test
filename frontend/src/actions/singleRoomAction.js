import { getRoomById } from '../connections/connections'

export const WAITING_ROOM ='WAITING_ROOM'
export const RECIVED_ROOM = 'RECIVED_ROOM'

function room(result, type) {
  return { type, result }
}

export function singleRoom(id) {
  return dispatch => {
    dispatch(room({}, WAITING_ROOM))
    getRoomById(id)
      .then(res => {
        dispatch(room(res, RECIVED_ROOM))
      })
    }
}
