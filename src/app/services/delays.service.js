import * as delayActions from '../redux-store/actions/delay.actions';
const basePath = '/data/';

/** @ngInject */
export function DelaysService($http, $q, $log) {
  function getDelayData(origin, destination) {
    return (dispatch, getState) => {
      dispatch(delayActions.fetchStart());
      $http({
        method: 'GET',
        url: basePath + (origin + '_' + destination + '.json')
      }).then(response => {
        dispatch(delayActions.receive(response.data));
      }, error => {
        dispatch(delayActions.error(error));
      });
    };
  }

  return {
    getDelayData
  };
}

const name = 'ria-delays-service-module';
angular
    .module(name, [])
    .factory('riaDelaysService', DelaysService);

export default name;
