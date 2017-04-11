export default config;

/** @ngInject */
function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('404');

  $stateProvider
    .state('404', {
      url: '/404',
      component: 'app'
    });
}
