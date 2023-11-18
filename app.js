'use strict';

const Homey = require('homey');

class MyApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('MyApp has been initialized');

    const hourcard = this.homey.flow.getActionCard('Hour_As_A_Number');
    hourcard.registerRunListener(async (args) => {
      let hourdate = new Date();
      let current_hour = hourdate.getHours();
      current_hour=current_hour+1;
      if (current_hour>=24){
        current_hour=0;
      }

      return {
        Current_hour_output: current_hour
      }
    })

    const minutecard = this.homey.flow.getActionCard('Minute_As_A_Number');
    minutecard.registerRunListener(async (args) => {
      let minutedate = new Date();
      let current_minute = minutedate.getMinutes();
     // current_hour=current_hour+1;
     // if (current_hour>=24){
     //   current_hour=0;
      //}

      return {
        Current_minute_output: current_minute
      }
    })

  }

}

module.exports = MyApp;
