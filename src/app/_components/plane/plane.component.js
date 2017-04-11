
class PlaneController {
  /** @ngInject */
  constructor($rootScope, $ngRedux, $scope, $document) {
    this.props = {};
    this.$rootScope = $rootScope;
    this.$ngRedux = $ngRedux;
    this.$scope = $scope;
    this.$document = $document;
    const unsubscribe = this.$ngRedux.connect(this.mapStateToThis, {})(this.props);
    this.$scope.$on('$destroy', unsubscribe);
    console.log(this);
  }
  $onInit() {
    this.$rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
      this.$document.ready(() => {
        if (!this.landThePlane && toState.name !== 'main.start') {
          this.landThePlane = true;
        }
      });
    });
  }
  // Which part of the Redux global state does our component want to receive?
  mapStateToThis(state) {
    return {
      ui: state.ui,
      router: state.router
    };
  }
}

export default angular.module('ria.components.plane', [])
  .component('riaPlane', {
    controller: PlaneController,
    controllerAs: 'ctrl',
    template: require('./plane.template.html')
  })
  .name;
