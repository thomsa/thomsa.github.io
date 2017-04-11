export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider) {
  $stateProvider
    .state('main.results', {
      url: '/results/:originCode/:destinationCode',
      component: 'riaResults',
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
