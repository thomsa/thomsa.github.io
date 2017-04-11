import ngRedux from 'ng-redux';
import ngReduxUiRouter from 'redux-ui-router';
import thunkMiddleware from 'redux-thunk';
import reduxStore from './redux-store';
import airportService from './services/airports.service';
import delaysService from './services/delays.service';

export default angular
  .module('ria.redux-store.module', [
    ngRedux,
    ngReduxUiRouter,
    airportService,
    delaysService
  ])
  .config($ngReduxProvider => {
    $ngReduxProvider.createStoreWith(reduxStore, [thunkMiddleware, 'ngUiRouterMiddleware']);
  }).name;
