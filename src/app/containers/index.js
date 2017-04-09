/**
 * CONTAINERS MODULE
 * responsible for gathering the containers needed for the application to work
 * containers are workins as pages, they are the highest DOM element on a certain route
 *
 * THE CONTAINER NAMES CAN'T CONTAIN DASHES, THE ROUTER CAN NOT RECOGNIZE THEM AS VALID COMPONENTS!
 */
import angular from 'angular';
import Home from './home/home.component';
import evaluate from './evaluate/evaluate.component';

const containers = 'ria-containers-module';
angular
    .module(containers, [])
    .component('riaHomeContainer', Home)
    .component('riaEvaluateContainer', evaluate);

export default containers;
