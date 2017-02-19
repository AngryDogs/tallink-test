import {
  getConferenceById,
  deleteParticipantById,
  addParticipant
} from '../connections/connections';

export const WAITING_CONFERENCE ='WAITING_CONFERENCE';
export const RECIVED_CONFERENCE = 'RECIVED_CONFERENCE';
export const DELETE_PARTICIPANT ='DELETE_PARTICIPANT';
export const ADD_PARTICIPANT = 'ADD_PARTICIPANT';

function conference(result, type) {
  return { type, result }
}

export function singleConference(roomId, conId) {
  return dispatch => {
    getConferenceById(roomId, conId)
      .then(res => {
        dispatch(conference(res, RECIVED_CONFERENCE))
      })
    }
}

export function deleteParticipantInConference(id) {
  deleteParticipantById(id);
  return dispatch => dispatch({ type: DELETE_PARTICIPANT, id });
}

export function addParticipantInConference(data, roomId, conId) {
  return dispatch => {
    addParticipant(data).then(res => {
      dispatch({ type: ADD_PARTICIPANT, data });
    }).then(res => {
      getConferenceById(roomId, conId)
        .then(res => {
          dispatch(conference(res, RECIVED_CONFERENCE))
        });
    })
  }
}
