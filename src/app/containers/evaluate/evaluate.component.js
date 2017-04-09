import * as uiActions from '../../redux-store/actions/ui.actions';

class EvaluateController {
  /** @ngInject */
  constructor($ngRedux, $scope, $state, $stateParams, riaDelaysService) {
    this.props = {};
    const unsubscribe = $ngRedux.connect(this.mapStateToThis,
      Object.assign({},
        uiActions,
        riaDelaysService))(this.props);
    $scope.$on('$destroy', unsubscribe);

    console.log(this);

    this.$state = $state;

    if ($stateParams.origin && $stateParams.dest) {
      this.props.getDelayData($stateParams.origin, $stateParams.dest);
    }
    console.log(this.props);
    this.chart = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Basic drilldown'
      },
      xAxis: {
        type: 'category'
      },

      legend: {
        enabled: false
      },

      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true
          }
        },
        column: {
          zones: [{
            value: -10, // Values up to 10 (not including) ...
            color: 'green' // ... have the color blue.
          }, {value: 10, // Values up to 10 (not including) ...
            color: 'yellow' // ... have the color blue.
          }, {
            color: 'red' // Values from 10 (including) and up have the color red
          }]
        }
      },

      series: [{
        name: 'Things',
        colorByPoint: true,
        data: [{
          name: 'Animals',
          y: 5,
          drilldown: 'animals'
        }, {
          name: 'asd',
          y: -15,
          drilldown: 'add'
        }, {
          name: 'Fruits',
          y: -2,
          drilldown: 'fruits'
        }, {
          name: 'Cars',
          y: 11,
          drilldown: 'cars'
        }]
      }],
      drilldown: {
        series: [{
          id: 'animals',
          data: [
                    ['Cats', 15],
                    ['Dogs', 2],
                    ['Cows', 1],
                    ['Sheep', 2],
                    ['Pigs', 1]
          ]
        }, {
          id: 'fruits',
          data: [
                    ['Apples', 15],
                    ['Oranges', 2]
          ]
        }, {
          id: 'cars',
          data: [
                    ['Toyota', 4],
                    ['Opel', 2],
                    ['Volkswagen', 2]
          ]
        }]
      }
    };
  }

  mapStateToThis(state) {
    return {
      ui: state.ui,
      delays: state.delay
    };
  }
}

export default {
  template: require('./evaluate.template.html'),
  controller: EvaluateController,
  controllerAs: 'ctrl',
  bindings: {
    layout: '@',
    flex: '@'
  }
};
