const weatherApi = require('../apis/weatherApi')

const findCurrentWeather = async (city) => {
  const data = weatherApi.getWeather(city)
  return data
}

const findWeatForecast = async (city) => {
  const data = weatherApi.getWeatherForecast(city)
  return data
}

const weatherService = { findCurrentWeather, findWeatForecast }

module.exports = { weatherService }
