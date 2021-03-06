import axios from 'axios';

export function getAllRooms() {
  return axios.get('http://localhost:8080/rooms/all')
  .catch(err => {
    console.log(err);
  });
}

export function getRoomById(id) {
  return axios.get('http://localhost:8080/rooms/' + id)
  .catch(err => {
    console.log(err);
  });
}

export function getConferenceById(roomId, conId) {
  return axios.get('http://localhost:8080/rooms/' + roomId + '/conference/' + conId)
  .catch(err => {
    console.log(err);
  });
}

export function deleteConferenceById(roomId, conId) {
  return axios.delete('http://localhost:8080/rooms/' + roomId + '/conference/delete/' + conId)
  .catch(err => {
    console.log(err);
  });
}

export function deleteParticipantById(id) {
  return axios.delete('http://localhost:8080/participant/delete/' + id)
  .catch(err => {
    console.log(err);
  });
}

export function addParticipant(payload) {
  return axios.post('http://localhost:8080/participant/add/',{
    ...payload,
  })
  .catch(err => {
    console.log(err);
  });
}

export function addConference(payload) {
  return axios.post('http://localhost:8080/conference/add/',{
    ...payload,
  })
  .catch(err => {
    console.log(err);
  });
}
