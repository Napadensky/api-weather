const ipApi = require('../apis/ipApi')

const findMyCity = async (req) => {
  const data = await ipApi.getLocationByIp(req)
  return data
}

const ipService = { findMyCity }

module.exports = { ipService }
