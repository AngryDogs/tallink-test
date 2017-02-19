const MODAL_CHANGE = 'MODAL_CHANGE';

export function changeModalStatus(currentStatus) {
  return dispatch => dispatch({ type: MODAL_CHANGE, currentStatus });
}
