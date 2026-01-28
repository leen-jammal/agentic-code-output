const express = require('express');
const router = express.Router();
const cryptoController = require('../controllers/cryptoController');

router.get('/', cryptoController.getCryptoData);

module.exports = router;