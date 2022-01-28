const GEO_API_KEY = process.env.REACT_APP_APIFY_V2_TOKEN

const CURRENT_IP_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${GEO_API_KEY}`

const CURRENT_TIME_URL = ip => `https://worldtimeapi.org/api/ip/${ip}`

const RANDOM_QUOTE_URL =
  'https://programming-quotes-api.herokuapp.com/Quotes/random'

export { CURRENT_IP_URL, CURRENT_TIME_URL, RANDOM_QUOTE_URL }
