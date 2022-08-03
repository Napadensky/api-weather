const { ipService, weatherService } = require('../services')
const { MyError } = require('../errors')

const getLocation = async (req, res, next) => {
  const data = await ipService.findMyCity(req)
  data.status === 'fail' ? next(MyError.badRequest(data.message)) : res.status(200).json(data)
}

const getCurrentByCity = async (req, res, next) => {
  let { city } = await ipService.findMyCity(req)
  if (req.params.city) city = req.params.city
  const weather = await weatherService.findCurrentWeather(city)
  weather.cod === 401 ? next(MyError.authentication(weather.message)) : res.json(weather)
}

const getForecastByCity = async (req, res, next) => {
  let { city } = await ipService.findMyCity(req)
  if (req.params.city) city = req.params.city
  const weather = await weatherService.findWeatForecast(city)
  weather.cod === 401 ? next(MyError.authentication(weather.message)) : res.json(weather)
}

module.exports = { getLocation, getCurrentByCity, getForecastByCity }
