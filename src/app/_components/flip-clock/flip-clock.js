import angular from 'angular';

class FlipClockController {
  constructor() {
    this.text = 'My brand new component!';
  }
}

export default angular.module('ria.components.flip-clock', [])
  .component('flipClock', {
    template: require('./flip-clock.html'),
    controller: FlipClockController,
    controllerAs: 'ctrl',
    bindings: {
      hour: '@',
      minute: '@'
    }
  }).name;
