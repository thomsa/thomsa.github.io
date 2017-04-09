import * as uiActions from '../../redux-store/actions/ui.actions';
import * as airportActions from '../../redux-store/actions/airport.actions';

class AirportSearchController {
    /** @ngInject */
  constructor($ngRedux, $scope, riaAirportService, riaDelaysService) {
    this.props = {};
    const unsubscribe = $ngRedux.connect(this.mapStateToThis,
      Object.assign({},
        airportActions,
        uiActions,
        riaAirportService,
        riaDelaysService))(this.props);
    $scope.$on('$destroy', unsubscribe);

    if (!this.props.airports.allAirports.length) {
      this.props.getAllAirports();
    }
  }

  setSelectedAirport(item) {
    if (this.type === 'origin') {
      console.log('setting origin');
      this.props.setOriginAirport(item);
    } else if (this.type === 'destination') {
      console.log('setting dest');
      this.props.setDestinationAirport(item);
    }
    console.log(this);
    if (this.props.airports.selectedOrigin && this.props.airports.selectedDestination) {
      this.props.getDelayData(this.props.airports.selectedOrigin.code, this.props.airports.selectedDestination.code);
    }
  }

  mapStateToThis(state) {
    return {
      ui: state.ui,
      airports: state.airport
    };
  }
}

export default {
  controller: AirportSearchController,
  controllerAs: 'ctrl',
  template: require('./airport-search-input.template.html'),
  bindings: {
    type: '@'
  }
};
