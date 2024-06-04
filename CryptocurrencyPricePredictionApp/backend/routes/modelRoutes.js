const express = require('express');
const router = express.Router();
const modelController = require('../controllers/modelController');

router.post('/train', modelController.trainModel);
router.get('/predict', modelController.predictPrice);

module.exports = router;