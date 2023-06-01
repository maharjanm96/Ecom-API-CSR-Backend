const express = require('express');

const { getAllProducts, getSingleProducts, createProducts, replaceProducts, updateProducts, deleteProducts } = require('../controllers/product');

const { checkAPIKey,verifyTokenAdmin } = require('../middleware/auth')
//Initialize router object.
const router = express.Router();



router.get("/", checkAPIKey, getAllProducts)
router.get("/:productID", getSingleProducts)

router.post('/', verifyTokenAdmin, createProducts)
router.put('/:productID', verifyTokenAdmin, replaceProducts)
router.patch('/:productID', verifyTokenAdmin, updateProducts)
router.delete('/:productID', verifyTokenAdmin, deleteProducts)


module.exports = router;
