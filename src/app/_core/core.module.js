import 'angular-material/angular-material.min.css';
import 'jquery';

// ANGULAR IMPORTS
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import uiRouter from 'angular-ui-router';

/**
 * 3rd PARTY IMPORTS
 */
import highChartsng from 'highcharts-ng';

// reusable custom modules
import constants from './core.constants';

export default angular
    .module('ria.core.module', [
        /**
         * ANGULAR MODULES
         */
      ngMaterial,
      ngAnimate,
      ngAria,
      uiRouter,
        /*
         * Reusable cross app modules
         */
      constants,
        /**
         * 3RD PARTY MODULES
         */
      highChartsng
    ]).name;
