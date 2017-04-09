import * as uiActions from '../../redux-store/actions/ui.actions';
import * as airportActions from '../../redux-store/actions/airport.actions';

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
  template: require('./home.template.html'),
  controller: HomeController,
  controllerAs: 'ctrl',
  bindings: {
    layout: '@',
    flex: '@'
  }
};
