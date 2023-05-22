const express = require('express');

const { getAllProducts, getSingleProducts, createProducts, replaceProducts, updateProducts, deleteProducts } = require('../controllers/product');


//Initialize router object.
const router = express.Router();

router.get("/", getAllProducts)
router.get("/:productID", getSingleProducts)
router.post('/', createProducts)
router.put('/:productID', replaceProducts)
router.patch('/:productID', updateProducts)
router.delete('/:productID', deleteProducts)


module.exports = router;
