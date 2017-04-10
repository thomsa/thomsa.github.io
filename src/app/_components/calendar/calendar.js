class CalendarController {
  constructor() {
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }

  $onInit() {
    this.day = parseInt(this.day, 10);
    const Calendar = new Date();
    const currentYear = Calendar.getFullYear();     // Returns year
    const currentMonth = Calendar.getMonth();    // Returns month (0-11)
    const today = Calendar.getDate();    // Returns day (1-31)
    const weekday = Calendar.getDay();    // Returns day (1-7)

    if (this.day >= today) {
      this.startingDayOfTheMonth = new Array(new Date(currentYear + '-' + (currentMonth + 1) + '-01').getDay() - 1);
      this.month = this.months[currentMonth];
      this.daysInMonth = new Array(new Date(currentYear, (currentMonth + 1), 0).getDate());
    } else {
      this.startingDayOfTheMonth = new Array(new Date(currentYear + '-' + (currentMonth + 2) + '-01').getDay() - 1);
      this.month = this.months[currentMonth + 1];
      this.daysInMonth = new Array(new Date(currentYear, (currentMonth + 2), 0).getDate());
    }
    console.log();
    const DAYS_OF_WEEK = 7;    // "constant" for number of days in a week
    const DAYS_OF_MONTH = 31;    // "constant" for number of days in a month
    let cal;    // Used for printing
  }
}
export default angular.module('ria.components.calendar', [])
  .component('riaCalendar', {
    template: require('./calendar.html'),
    controller: CalendarController,
    controllerAs: 'ctrl',
    bindings: {
      day: '@'
    }
  }).name;
