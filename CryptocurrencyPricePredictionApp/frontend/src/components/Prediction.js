import React, { useState, useEffect } from 'react';
import { fetchHistoricalData, predictPrice } from '../services/apiService';
import Chart from './Chart';

const Prediction = () => {
  const [data, setData] = useState([]);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const historicalData = await fetchHistoricalData();
      setData(historicalData);
    };
    fetchData();
  }, []);

  const handlePredict = async () => {
    const predictionData = await predictPrice();
    setPredictions(predictionData);
  };

  return (
    <div>
      <button onClick={handlePredict}>Predict Prices</button>
      <Chart data={data.concat(predictions)} />
    </div>
  );
};

export default Prediction;