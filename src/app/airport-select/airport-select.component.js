import * as uiActions from '../_redux-store/actions/ui.actions';
import * as stateActions from 'redux-ui-router';
class AirportSelectController {
  /** @ngInject */
  constructor($ngRedux, $scope) {
    this.props = {};
    const unsubscribe = $ngRedux.connect(this.mapStateToThis,
      Object.assign({},
        uiActions,
        stateActions))(this.props);
    $scope.$on('$destroy', unsubscribe);
    console.log(this);
  }
  getStarteClick() {
    this.props.getStartedClicked();
    this.props.stateGo('main.test');
  }
  mapStateToThis(state) {
    return {
      airports: state.airport,
      router: state.router,
      ui: state.ui,
      delays: state.delay
    };
  }
}

export default {
  template: require('./airport-select.template.html'),
  controller: AirportSelectController,
  controllerAs: 'ctrl',
  bindings: {
    layout: '@',
    flex: '@'
  }
};
