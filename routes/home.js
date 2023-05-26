const express = require('express');
const router = express.Router();
const { home } = require("../controllers/product")


router.get('/', (req, res) => {
    res.send("Welcome To The ECOMMERCE SITE...")
})


module.exports = router