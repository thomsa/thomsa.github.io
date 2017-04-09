export const types = {
  DELAYS_FETCH: 'DELAYS_FETCH_ALL',
  DELAYS_FETCH_ERROR: 'DELAYS_FETCH_ERROR',
  DELAYS_FETCH_SUCCESS: 'DELAYS_FETCH_SUCCESS'
};

export function receive(data) {
  return {
    type: types.DELAYS_FETCH_SUCCESS,
    data
  };
}
export function fetchStart() {
  return {
    type: types.DELAYS_FETCH
  };
}

export function error(error) {
  return {
    type: types.DELAYS_FETCH_SUCCESS,
    error
  };
}
