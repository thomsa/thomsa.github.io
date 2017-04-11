import * as uiActions from '../../_redux-store/actions/ui.actions';
import * as airportActions from '../../_redux-store/actions/airport.actions';

class HomeController {
  /** @ngInject */
  constructor($ngRedux, $scope, $state, riaAirportService) {
    this.props = {};
    const unsubscribe = $ngRedux.connect(this.mapStateToThis,
      Object.assign({},
        airportActions,
        uiActions,
        riaAirportService))(this.props);
    $scope.$on('$destroy', unsubscribe);

    this.props.getAllAirports();
    console.log(this);

    this.$state = $state;
  }

  mapStateToThis(state) {
    return {
      airports: state.airport,
      ui: state.ui,
      delays: state.delay
    };
  }
}

export default {
  template: require('./main-layout.template.html'),
  controller: HomeController,
  controllerAs: 'ctrl',
  bindings: {
    layout: '@',
    flex: '@'
  }
};
