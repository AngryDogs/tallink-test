import {
  WAITING_ROOM,
  RECIVED_ROOM,
} from '../actions/singleRoomAction';

export default function singleRoom(state = { res: {}, isLoading: false}, result) {
  switch (result.type) {
    case WAITING_ROOM:
      return {
        result: {},
        isLoading: true,
      }
    case RECIVED_ROOM:
      return {
        result: result,
        isLoading: false,
      }
    default:
      return {
        result: {},
        isLoading: false,
      }
  }
}
