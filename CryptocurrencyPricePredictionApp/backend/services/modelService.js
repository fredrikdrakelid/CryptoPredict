const tf = require('@tensorflow/tfjs-node');
const { getHistoricalData } = require('./dataService');
const { preprocessData } = require('../utils/dataPreprocessing');

exports.trainLSTMModel = async () => {
  const data = await getHistoricalData();
  const processedData = preprocessData(data);

  const model = tf.sequential();
  model.add(tf.layers.lstm({ units: 50, returnSequences: true, inputShape: [processedData.X_train.shape[1], 1] }));
  model.add(tf.layers.lstm({ units: 50, returnSequences: false }));
  model.add(tf.layers.dense({ units: 1 }));

  model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

  await model.fit(processedData.X_train, processedData.y_train, {
    epochs: 100,
    batchSize: 32,
    validationSplit: 0.2
  });

  await model.save('file://model');
};

exports.predict = async () => {
  const model = await tf.loadLayersModel('file://model/model.json');
  const data = await getHistoricalData();
  const processedData = preprocessData(data, false);

  const predictions = model.predict(processedData.X_test);
  return predictions.arraySync();
};