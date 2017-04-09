import {types} from '../actions/delay.actions';

const defaultState = {
  fetching: false,
  data: []
};

export default function airport(state = defaultState, action) {
  switch (action.type) {
    case types.DELAYS_FETCH:
      return Object.assign({}, state, {
        fetching: true
      });
    case types.DELAYS_FETCH_ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: action.error
      });
    case types.DELAYS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        fetchin: false,
        data: action.data
      });
    default:
      return state;
  }
}
