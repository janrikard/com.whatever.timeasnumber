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

    const secondcard = this.homey.flow.getActionCard('Second_As_A_Number');
    secondcard.registerRunListener(async (args) => {
      let seconddate = new Date();
      let current_second = seconddate.getSeconds();
     
      return {
        Current_second_output: current_second
      }
    })

    const unixtimecard = this.homey.flow.getActionCard('Unix_Time_As_A_Number');
    unixtimecard.registerRunListener(async (args) => {
      
      return {
        Current_unix_time_output: Date.now()
      }
    })
  const hour12card = this.homey.flow.getActionCard('hour_12_clock_As_A_Number');
    hour12card.registerRunListener(async (args) => {
      let hour12date = new Date();
      let current_hour12 = hour12date.getHours();
      let period = "am";
      current_hour12=current_hour12+1;
      if (current_hour12>12){
        period="pm";
        current_hour12=current_hour12-12;
      }

      return {
        Current_12_hour_output: current_hour12,
        Current_period_output: period
      }
    })
  }

}

module.exports = MyApp;
