import {types} from '../actions/airport.actions';

const defaultState = {
  fetching: false,
  allAirports: [],
  selectedOrigin: {},
  selectedDestination: {}
};

export default function airport(state = defaultState, action) {
  switch (action.type) {
    case types.AIRPORTS_FETCH:
      return Object.assign({}, state, {
        fetching: true
      });
    case types.AIRPORTS_FETCH_ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: action.error
      });
    case types.AIRPORTS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        allAirports: action.data
      });
    case types.SET_DESTINATION_AIRPORT:
      return Object.assign({}, state, {
        selectedDestination: action.airport
      });
    case types.SET_ORIGIN_AIRPORT:
      return Object.assign({}, state, {
        selectedOrigin: action.airport
      });
    default:
      return state;
  }
}
