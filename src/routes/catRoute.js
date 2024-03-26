const express = require('express');
const router = express.Router();

const prodCatController = require('../controllers/prodCatController');


router.get('/', prodCatController.getAllCat);

module.exports = router;