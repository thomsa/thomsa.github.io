export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider) {
  $stateProvider
    .state('main.start', {
      url: '/',
      component: 'riaStart',
      resolve: {
        // this hack has to be done for all containers, otherwise the height won't be flex
        layout() {
          return 'row';
        },
        flex() {
          return '100';
        }
      }
    });
}
