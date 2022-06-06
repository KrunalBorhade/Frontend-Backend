const express = require('express');

const app = express();
app.use(express.json())

const productController = require("./controller/product.controller")
app.use("/footwear",productController)

module.exports = app;