export const types = {
  AIRPORTS_FETCH: 'AIRPORTS_FETCH_ALL',
  AIRPORTS_FETCH_ERROR: 'AIRPORTS_FETCH_ERROR',
  AIRPORTS_FETCH_SUCCESS: 'AIRPORTS_FETCH_SUCCESS',
  SET_ORIGIN_AIRPORT: 'SET_ORIGIN_AIRPORT',
  SET_DESTINATION_AIRPORT: 'SET_ORIGIN_AIRPORT'
};

export function receive(data) {
  return {
    type: types.AIRPORTS_FETCH_SUCCESS,
    data
  };
}
export function fetchStart() {
  return {
    type: types.AIRPORTS_FETCH
  };
}

export function error(error) {
  return {
    type: types.AIRPORTS_FETCH_SUCCESS,
    error
  };
}

export function setOriginAirport(airport) {
  return {
    type: types.SET_ORIGIN_AIRPORT,
    airport
  };
}

export function setDestinationAirport(airport) {
  return {
    type: types.SET_DESTINATION_AIRPORT,
    airport
  };
}
