const modelService = require('../services/modelService');

exports.trainModel = async (req, res) => {
  try {
    await modelService.trainLSTMModel();
    res.status(200).json({ message: 'Model trained successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.predictPrice = async (req, res) => {
  try {
    const prediction = await modelService.predict();
    res.status(200).json(prediction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};