import ngRedux from 'ng-redux';
import thunkMiddleware from 'redux-thunk';
import reduxStore from './redux-store';
import airportService from './services/airports.service';
import delaysService from './services/delays.service';

export default angular
  .module('ria.redux-store.module', [
    ngRedux,
    airportService,
    delaysService
  ])
  .config($ngReduxProvider => {
    $ngReduxProvider.createStoreWith(reduxStore, [thunkMiddleware]);
  }).name;
