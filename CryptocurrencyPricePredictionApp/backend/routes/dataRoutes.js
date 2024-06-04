const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/historical', dataController.fetchHistoricalData);

module.exports = router;