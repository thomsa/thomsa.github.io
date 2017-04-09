/**
 * RIA CORE MODULE
 * responsible for requiring other core and component modules from the application code, as well as needed third party libraries
 */
import angular from 'angular';
const name = 'ria-core-module';

/**
 * 3rd party libraries
 */
// require('font-awesome-sass-loader');
// require('chartist/dist/chartist.min.css');
// import angularChartist from 'angular-chartist.js';
import anguComplete from 'angucomplete-alt';
import ngRedux from 'ng-redux';
import thunkMiddleware from 'redux-thunk';

/**
 * RIA libraries
 */
import containers from './containers';
import components from './components';
import reduxStore from './redux-store';

angular.module(name, [
      // angularChartist,
  containers,
  components,
  'angucomplete-alt',
  ngRedux
])
.config($ngReduxProvider => {
  $ngReduxProvider.createStoreWith(reduxStore, [thunkMiddleware]);
});

export default name;
