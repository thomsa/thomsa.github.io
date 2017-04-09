import * as airportActions from '../redux-store/actions/airport.actions';
const basePath = '/data/';

 /** @ngInject */
export function AirportService($http, $q, $log) {
  function getAllAirports() {
    return (dispatch, getState) => {
      dispatch(airportActions.fetchStart());
      $http({
        method: 'GET',
        url: basePath + ('/airport_lookup/airports.json')
      }).then(response => {
        dispatch(airportActions.receive(response.data));
      }, error => {
        dispatch(airportActions.error(error));
      });
    };
  }

  return {
    getAllAirports
  };
}

const name = 'ria-airport-service-module';
angular
    .module(name, [])
    .factory('riaAirportService', AirportService);

export default name;
