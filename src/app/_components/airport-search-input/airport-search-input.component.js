import * as uiActions from '../../_redux-store/actions/ui.actions';
import * as airportActions from '../../_redux-store/actions/airport.actions';

class AirportSearchInputController {
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
      this.props.setOriginAirport(item);
      this.props.getConnectedAirports(item);
    } else if (this.type === 'destination') {
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

export default angular.module('ria.components.airport-search-input', [])
  .component('riaAirportSearchInput', {
    template: require('./airport-search-input.template.html'),
    controller: AirportSearchInputController,
    controllerAs: 'ctrl',
    bindings: {
      type: '@',
      placeHolder: '@',
      ngDisabled: '='
    }
  }).name;
