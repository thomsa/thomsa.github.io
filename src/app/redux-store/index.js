import {combineReducers} from 'redux';
import airport from './reducers/airport.reducers';
import ui from './reducers/ui.reducers';

const rootReducer = combineReducers({
  airport,
  ui
});

export default rootReducer;
