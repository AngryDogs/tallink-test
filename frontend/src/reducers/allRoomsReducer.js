import {
  WAITING_ROOMS,
  RECIVED_ROOMS,
} from '../actions/allRoomsAction';

export default function allRooms(state = { res: {}, isLoading: false}, result) {
  switch (result.type) {
    case WAITING_ROOMS:
      return {
        result: [],
        isLoading: true,
      }
    case RECIVED_ROOMS:
      return {
        result: result.results.data,
        isLoading: false,
      }
    default:
      return {
        result: [],
        isLoading: false,
      }
  }
}
