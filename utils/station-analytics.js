"use strict";

const stationAnalytics = {
  getLatestWeather(station) {
    let latestWeather = null;
    if (station.readings.length > 0) {
      latestWeather = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        latestWeather = station.readings[i];
      }
    }
    return latestWeather;
  },
  
  getCalculateCelcius(station){
    if (station.readings.length >= 1){
      station.temperature = station.readings[station.readings.length-1].temperature; 
    }
    return station.temperature;
  },
  
  getCalculateFahrenheit(station){
    if (station.readings.length >= 1){
      station.temperature = station.readings[station.readings.length-1].temperature; 
    }
    return station.temperature * 9/5 + 32;
  },

  getCodeToText(station){
    let code = 0;
    let codeToText = " ";
    if (station.readings.length >= 1){
      code = station.readings[station.readings.length-1].code; 
    }
    
    if (code == 100){
      codeToText = "Clear"; 
    }
    else if (code == 200){
      codeToText = "Partial Clouds"
    }
    else if (code == 300){
      codeToText = "Cloudy"
    }
    else if (code == 400){
      codeToText = "Light showers"
    }
    else if (code == 500){
      codeToText = "Heavy showers"
    }
    else if (code == 600){
      codeToText = "Rain"
    }
    else if (code == 700){
      codeToText = "Snow"
    }
    else if (code == 800){
      codeToText = "Thunder"
    }
    return codeToText;
  },
  
  
  getWindBeauford(station) {
    let windSpeed = 0;
    if (station.readings.length >= 1){
      windSpeed = station.readings[station.readings.length-1].windSpeed; 
    }
    
     if (windSpeed <= 1){
      return 0;
    } else if (windSpeed > 1 || windSpeed <= 5){
      return 1;
    } else if (windSpeed >= 6 || windSpeed <= 11) {
      return 2;
    } else if (windSpeed >= 12 || windSpeed <= 19) {
      return 3;
    } else if (windSpeed >= 20|| windSpeed <= 28) {
      return 4;
    } else if (windSpeed >= 29 || windSpeed <= 38) {
      return 5;
    } else if (windSpeed >= 39 || windSpeed <= 49) {
      return 6;
    } else if (windSpeed >= 50 || windSpeed <= 61) {
      return 7;
    } else if (windSpeed >= 62 || windSpeed <= 74) {
      return 8;
    } else if (windSpeed >= 75 || windSpeed <= 88) {
      return 9;
    } else if (windSpeed >= 89 || windSpeed <= 102) {
      return 10;
    } else {
      return 11;
    }
  }
  
};

module.exports = stationAnalytics;





