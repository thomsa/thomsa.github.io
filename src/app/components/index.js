/**
 * COMPONENTS MODULE
 * responsible for gathering the containers needed for the application to work
 * containers are workins as pages, they are the highest DOM element on a certain route
 *
 * THE CONTAINER NAMES CAN'T CONTAIN DASHES, THE ROUTER CAN NOT RECOGNIZE THEM AS VALID COMPONENTS!
 */
import angular from 'angular';

const components = 'ria-components-module';
import plane from './plane/plane.component';
import airportSearch from './airport-search-input/airport-search-input.component';
import drillDownChart from './drill-down-chart/drill-down-chart.component';

angular
    .module(components, [])
    .component('plane', plane)
    .component('riaAirportSearchInput', airportSearch)
    .component('riaDrillDownChart', drillDownChart);

export default components;
