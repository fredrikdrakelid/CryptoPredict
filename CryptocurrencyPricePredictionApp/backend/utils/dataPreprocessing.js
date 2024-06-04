const tf = require('@tensorflow/tfjs-node');

exports.preprocessData = (data, isTrain = true) => {
  const prices = data.map(d => d.current_price);
  const normalizedPrices = prices.map(price => price / Math.max(...prices));

  const sequenceLength = 50;
  const X = [];
  const y = [];

  for (let i = 0; i < normalizedPrices.length - sequenceLength; i++) {
    X.push(normalizedPrices.slice(i, i + sequenceLength));
    if (isTrain) {
      y.push(normalizedPrices[i + sequenceLength]);
    }
  }

  const X_tensor = tf.tensor3d(X, [X.length, sequenceLength, 1]);
  const y_tensor = isTrain ? tf.tensor1d(y) : null;

  return { X_train: X_tensor, y_train: y_tensor, X_test: X_tensor };
};