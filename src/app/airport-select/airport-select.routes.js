export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider) {
  $stateProvider
    .state('main.selectAirports', {
      url: '/select-airports',
      component: 'riaAirportSelect',
      resolve: {
        // this hack has to be done for all containers, otherwise the height won't be flex
        layout() {
          return 'column';
        },
        flex() {
          return '100';
        }
      }
    });
}
