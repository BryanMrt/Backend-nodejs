const express = require("express");
const router = express.Router();

const categoryRoute = require("./catRoute");
// const products = require('./productRoute');

router.use("/api/categories", categoryRoute);
// router.


module.exports = router;