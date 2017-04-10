import airportsService from './airports.service';
import delayssService from './delays.service';

export default angular
  .module('ria.services.module', [
    airportsService,
    delayssService
  ]).name;
