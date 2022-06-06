const express = require('express');
const router = express.Router();
const Product = require("../models/product.model")

router.get("/", async (req, res) => {
    try {
        const PAGE_SIZE = 1;
        const page = req.query.page || "0"
        const total = await Product.countDocuments({})
        const products = await Product.find({}).limit(PAGE_SIZE).skip(PAGE_SIZE * page)

        return res.status(200).send({totalPages:Math.ceil(total/PAGE_SIZE),products})
    } catch (err) {
        res.status(500).send({message: err.message})
    }
})

router.post("/", async (req, res) => {
    try {
        const products = await Product.create(req.body)

        return res.status(200).send(products)
    } catch (err) {
        res.status(500).send({message: err.message})
    }
})

module.exports = router
