import * as airportActions from '../../_redux-store/actions/airport.actions';
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

export default angular
    .module('ria-airport-service-module', [])
    .factory('riaAirportService', AirportService).name;

