import {types} from '../actions/delay.actions';

const defaultState = {
  fetching: false,
  data: []
};

export default function delay(state = defaultState, action) {
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
      return createDelayDataFromRawData(state, action);
    default:
      return state;
  }
}
function createDelayDataFromRawData(state, action) {
  let result = [];
  const groupToValues = action.data.reduce((obj, item) => {
    obj[item.FL_DATE] = obj[item.FL_DATE] || [];
    obj[item.FL_DATE].push(item);
    return obj;
  }, {});
  const groupToDistance = action.data.reduce((obj, item) => {
    obj[item.DISTANCE] = obj[item.DISTANCE] || [];
    obj[item.DISTANCE].push(item);
    return obj;
  }, {});

  console.log(groupToValues);
  console.log(groupToDistance);
  result = action.data.map((value, index) => {
    console.log(value);
    return value;
  });

  return Object.assign({}, state, {
    fetching: false,
    data: result
  });
}
