import { getAllRooms } from '../connections/connections'

export const WAITING_ROOMS ='WAITING_ROOMS'
export const RECIVED_ROOMS = 'RECIVED_ROOMS'

function rooms(results, type) {
  return { type, results }
}

export function allRooms() {
  return dispatch => {
    dispatch(rooms({}, WAITING_ROOMS))
    getAllRooms()
      .then(res => {
        dispatch(rooms(res, RECIVED_ROOMS))
      })
    }
}
