class ChartController {
    /** @ngInject */
  constructor($ngRedux, $scope) {
    const unsubscribe = $ngRedux.connect(this.mapStateToThis, {})(this);
    $scope.$on('$destroy', unsubscribe);
    console.log(this);
  }
    // Which part of the Redux global state does our component want to receive?
  mapStateToThis(state) {
    return {
      ui: state.ui
    };
  }
}

export default {
  controller: ChartController,
  controllerAs: 'ctrl',
  template: require('./drill-down-chart.template.html'),
  $onInit() {
    console.log('init');
  }
};
