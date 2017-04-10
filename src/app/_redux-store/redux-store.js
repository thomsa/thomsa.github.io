import {combineReducers} from 'redux';
import airport from './reducers/airport.reducers';
import ui from './reducers/ui.reducers';
import delay from './reducers/delay.reducers';

const rootReducer = combineReducers({
  airport,
  ui,
  delay
});

export default rootReducer;
