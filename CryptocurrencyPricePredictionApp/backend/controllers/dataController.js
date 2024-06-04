const dataService = require('../services/dataService');

exports.fetchHistoricalData = async (req, res) => {
  try {
    const data = await dataService.getHistoricalData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};