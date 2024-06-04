const axios = require('axios');

exports.getHistoricalData = async () => {
  const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
    params: {
      vs_currency: 'usd',
      ids: 'bitcoin,ethereum',
      order: 'market_cap_desc',
      per_page: 100,
      page: 1,
      sparkline: false
    }
  });
  return response.data;
};