'use strict';

const { DateTime } = require('luxon');
const Homey = require('homey');

class MyApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('MyApp has been initialized');

    const hourcard = this.homey.flow.getActionCard('Hour_As_A_Number');
    hourcard.registerRunListener(async (args) => {
      
     
      let hourdate = new DateTime();
      //hourdate.fromObject('Europe/Stockholm');
      
      let current_hour = hourdate.getHours();
      current_hour = current_hour + 1;
      if (current_hour >= 24) {
        current_hour = 0;
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
      current_hour12 = current_hour12 + 1;
      if (current_hour12 > 12) {
        period = "pm";
        current_hour12 = current_hour12 - 12;
      }

      return {
        Current_12_hour_output: current_hour12,
        Current_period_output: period
      }
    })

    const weekday_scard = this.homey.flow.getActionCard('Weekday_S_As_A_Number');
    weekday_scard.registerRunListener(async (args) => {
      let weekday_sdate = new Date();
      let current_weekday_s = weekday_sdate.getDay();

      return {
        Current_weekday_s_output: current_weekday_s
      }
    })

    const weekday_mcard = this.homey.flow.getActionCard('Weekday_M_As_A_Number');
    weekday_mcard.registerRunListener(async (args) => {
      let weekday_mdate = new Date();
      let current_weekday_m = weekday_mdate.getDay();
      if (current_weekday_m == 0) { current_weekday_m = 6 }
      else if (current_weekday_m == 1) { current_weekday_m = 0 }
      else if (current_weekday_m == 2) { current_weekday_m = 1 }
      else if (current_weekday_m == 3) { current_weekday_m = 2 }
      else if (current_weekday_m == 4) { current_weekday_m = 3 }
      else if (current_weekday_m == 5) { current_weekday_m = 4 }
      else if (current_weekday_m == 6) { current_weekday_m = 5 }

      return {
        Current_weekday_m_output: current_weekday_m
      }
    })


    const dayofmonthcard = this.homey.flow.getActionCard('Day_of_month_As_A_Number');
    dayofmonthcard.registerRunListener(async (args) => {
      let dayofmonthdate = new Date();
      let current_dayofmonth = dayofmonthdate.getDate();

      return {
        Current_day_of_month_output: current_dayofmonth
      }
    })

    const monthcard = this.homey.flow.getActionCard('Month_As_A_Number');
    monthcard.registerRunListener(async (args) => {
      let monthdate = new Date();
      let current_month = monthdate.getMonth();
      current_month = current_month + 1;
      return {
        Current_month_output: current_month
      }
    })


    const year2card = this.homey.flow.getActionCard('Year_As_A_Number_2_digit');
    year2card.registerRunListener(async (args) => {
      let year2date = new Date();
      let current_year2 = year2date.getFullYear();
      //this will not work after the year 2199
      if (current_year2 < 2100) {current_year2 = current_year2 - 2000; }
      else { current_year2 = current_year2 - 2100; }
      return {
        Current_year2_output: current_year2
      }
    })

    const year4card = this.homey.flow.getActionCard('Year_As_A_Number_4_digit');
    year4card.registerRunListener(async (args) => {
      let year4date = new Date();
      let current_year4 = year4date.getFullYear();
      return {
        Current_year4_output: current_year4
      }
    })
  }

}

module.exports = MyApp;
