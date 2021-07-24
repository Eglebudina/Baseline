'use strict';

const logger = require('../utils/logger');
const stationStore = require('../models/station-store.js');
const stationAnalytics = require("../utils/station-analytics.js");

const uuid = require("uuid");

const station = {
  index(request, response) {
    const stationId = request.params.id;
    logger.debug('Station id = ', stationId);

    const station = stationStore.getStation(stationId);
    const latestWeather = stationAnalytics.getLatestWeather(station);
    console.log(latestWeather);
    const windBeauford = stationAnalytics.getWindBeauford(station);
    console.log(windBeauford);
    const codeToText = stationAnalytics.getCodeToText(station);
    console.log(codeToText);
    const calculateCelcius = stationAnalytics.getCalculateCelcius(station);
    console.log (calculateCelcius);
    const calculateFahrenheit = stationAnalytics.getCalculateFahrenheit(station);
    console.log (calculateFahrenheit);
   
    const viewData = {
      title: "Station",
      station: stationStore.getStation(stationId),
      latestWeather: latestWeather,
      windBeauford : windBeauford,
      codeToText : codeToText,
      calculateCelcius: calculateCelcius,
      calculateFahrenheit: calculateFahrenheit
   
    };
    response.render("station", viewData);
    
  },
};

module.exports = station;