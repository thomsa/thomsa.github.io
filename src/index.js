import angular from 'angular';
import 'angular-ui-router';
import routesConfig from './routes';

import app from './app';

import './index.scss';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import 'angular-material/angular-material.min.css';
import 'jquery';

/**
 * SERVICES
 */
import airportService from './app/services/airports.service';

angular
  .module('app', ['ui.router', ngMaterial, ngAnimate, ngAria, app,
    airportService])
  .config(routesConfig);
