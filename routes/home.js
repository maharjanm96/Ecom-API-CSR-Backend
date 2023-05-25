const express = require('express');
const router = express.Router();
const { home } = require("../controllers/product")


router.get('/', home)


module.exports = router