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

export function deleteRoomById(id) {
  
}

export function getConferenceById(id) {
  return axios.get('http://localhost:8080/conference/' + id)
  .catch(err => {
    console.log(err);
  });
}

export function deleteConferenceById(id) {

}
