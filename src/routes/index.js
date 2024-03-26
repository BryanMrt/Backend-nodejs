const express = require("express");
const router = express.Router();

const categoryRoute = require("./catRoute");
const productRoute = require('./productRoute');

router.use("/api/categories", categoryRoute);
router.use("/api/products", productRoute);


module.exports = router;