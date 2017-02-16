import { getConferenceById } from '../connections/connections'

export const WAITING_CONFERENCE ='WAITING_CONFERENCE'
export const RECIVED_CONFERENCE = 'RECIVED_CONFERENCE'

function conference(result, type) {
  return { type, result }
}

export function singleConference(id) {
  return dispatch => {
    dispatch(conference({}, WAITING_CONFERENCE))
    getConferenceById(id)
      .then(res => {
        dispatch(conference(res, RECIVED_CONFERENCE))
      })
    }
}
