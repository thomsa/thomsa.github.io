import {combineReducers} from 'redux';
import {router} from 'redux-ui-router';
import airport from './reducers/airport.reducers';
import ui from './reducers/ui.reducers';
import delay from './reducers/delay.reducers';

const rootReducer = combineReducers({
  router,
  airport,
  ui,
  delay
});

export default rootReducer;
