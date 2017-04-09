export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'riaHomeContainer',
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
