import {
  WAITING_CONFERENCE,
  RECIVED_CONFERENCE,
} from '../actions/singelConferenceAction';

export default function singleConference(state = { res: {}, isLoading: false}, result) {
  switch (result.type) {
    case WAITING_CONFERENCE:
      return {
        result: {},
        isLoading: true,
      }
    case RECIVED_CONFERENCE:
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
