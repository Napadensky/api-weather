const nodeFetch = require('node-fetch')

const APIKEY = process.env.APIKEY

const createUrl = (cityName, forecast = false) => {
  const base = `https://api.openweathermap.org/data/2.5/${forecast ? 'forecast' : 'weather'}`
  const query = `?q=${cityName}&cnt=5&appid=${APIKEY}&units=metric`
  return `${base}${query}`
}

async function getWeather (city) {
  const url = createUrl(city)
  const response = await nodeFetch(url)
  const data = await response.json()
  return data
}

async function getWeatherForecast (city) {
  const url = createUrl(city, true)
  const response = await nodeFetch(url)
  const data = await response.json()
  return data
}

module.exports = { getWeather, getWeatherForecast }
