import * as uiActions from '../../redux-store/actions/ui.actions';
import * as airportActions from '../../redux-store/actions/airport.actions';

class HomeController {
  /** @ngInject */
  constructor($ngRedux, $scope, riaAirportService) {
    this.props = {};
    const unsubscribe = $ngRedux.connect(this.mapStateToThis,
      Object.assign({},
        airportActions,
        uiActions,
        riaAirportService))(this.props);
    $scope.$on('$destroy', unsubscribe);

    this.props.getAllAirports();
    console.log(this);
  }
  searchTextChange(text) {
    console.log(text);
  }
  getAirportsLookup(query) {
    const results = [];
    query = query.toLowerCase();
    for (let index = 0; index < this.props.airports.length; index++) {
      const element = this.props.airports[index];
      if (element.code.toLowerCase().indexOf(query) >= 0 ||
        element.name.toLowerCase().indexOf(query) >= 0 ||
        element.country_name.toLowerCase().indexOf(query) >= 0) {
        results.push(element);
      }
    }
    return results;
  }
  mapStateToThis(state) {
    return {
      airports: state.airport,
      ui: state.ui
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
