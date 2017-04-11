import * as airportActions from '../../_redux-store/actions/airport.actions';
const basePath = '/data/';

 /** @ngInject */
export function AirportService($http, $q, $log) {
  function getAllAirports() {
    return (dispatch, getState) => {
      dispatch(airportActions.fetchAirportsStart());
      $http({
        method: 'GET',
        url: basePath + ('/airport_lookup/airports.json')
      }).then(response => {
        dispatch(airportActions.receiveAirports(response.data));
      }, error => {
        dispatch(airportActions.airportsError(error));
      });
    };
  }

  function getConnectedAirports(originAirport) {
    return (dispatch, getState) => {
      if (originAirport) {
        dispatch(airportActions.fetchConnectedAirportsStart());
        $http({
          method: 'GET',
          url: basePath + ('/airport_lookup/connected_airports.json')
        }).then(response => {
          const connectedAirports = response.data[originAirport.code];
          dispatch(airportActions.receiveConnectedAirports(connectedAirports));
        }, error => {
          dispatch(airportActions.connectedAirportsError(error));
        });
      } else {
        dispatch(airportActions.receiveConnectedAirports(undefined));
      }
    };
  }

  return {
    getAllAirports,
    getConnectedAirports
  };
}

export default angular
    .module('ria-airport-service-module', [])
    .factory('riaAirportService', AirportService).name;

