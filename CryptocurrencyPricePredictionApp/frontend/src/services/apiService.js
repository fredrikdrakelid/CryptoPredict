import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchHistoricalData = async () => {
  const response = await axios.get(`${API_BASE_URL}/data/historical`);
  return response.data;
};

export const trainModel = async () => {
  await axios.post(`${API_BASE_URL}/model/train`);
};

export const predictPrice = async () => {
  const response = await axios.get(`${API_BASE_URL}/model/predict`);
  return response.data;
};