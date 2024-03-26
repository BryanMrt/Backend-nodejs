const express = require('express');
const prodCatController = require('../controllers/prodCatController');

const router = express.Router();

router.get('/', prodCatController.getAllCat);

module.exports = router;