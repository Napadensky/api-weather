const nodeFetch = require('node-fetch')

async function getLocationByIp (req) {
  let IP = ''
  if (process.env.NODE_ENV !== 'producction') IP = '190.224.16.32'
  else IP = req.headers['x-forwarded-for'] || req.connection.remoteAddress

  const url = `http://ip-api.com/json/${IP}?lang=es`

  const response = await nodeFetch(url)
  const data = await response.json()
  return data
}

module.exports = { getLocationByIp }
