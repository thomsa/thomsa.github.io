// import './app.scss';

// DI
import angular from 'angular';

// CORE
import core from './_core/core.module';
import components from './_components/components.module';
import reduxStoreModule from './_redux-store/redux-store.module';

// FEATURES
import containers from './containers/';

angular
  .module('riaApp', [
    /**
     * CORE MODULES
     */
    core,
    components,
    reduxStoreModule,
    /**
     * FEATURE MODULES
     */
    containers
  ]);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['riaApp'], {
      strictDi: true
    });
  });
