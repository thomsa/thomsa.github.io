import {types} from '../actions/ui.actions';

const defaultState = {
  status: 0
};

export default function airport(state = defaultState, action) {
  switch (action.type) {
    case types.GET_STARTED_CLICKED:
      return Object.assign({}, state, {
        status: types.GET_STARTED_CLICKED
      });
    case types.ORIGIN_INPUT_FOCUSED:
      return Object.assign({}, state, {
        status: types.ORIGIN_INPUT_FOCUSED
      });
    case types.ORIGIN_INPUT_BLUR:
      return Object.assign({}, state, {
        status: types.ORIGIN_INPUT_BLUR
      });
    case types.ORIGIN_SELECTED:
      return Object.assign({}, state, {
        status: types.ORIGIN_SELECTED
      });
    case types.DESTINATION_SELECTED:
      return Object.assign({}, state, {
        status: types.DESTINATION_SELECTED
      });
    default:
      return state;
  }
}
