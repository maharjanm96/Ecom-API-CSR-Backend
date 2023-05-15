const express = require('express');
const productData = require('../data/products.json')


//Initialize router object.
const router = express.Router();

router.get("/", (req, res) => {
    console.log(req.query)
    const { category } = req.query;
    const { minPrice } = req.query;

    //Apply Filter

    if (category && minPrice) {
        const filteredData = productData.filter((element) => {
            return element.category === category && element.price >= minPrice
            //return element.category === category;_
        })
        res.json(filteredData)
    }
    else if (category) {
        const filteredData = productData.filter((element) => {
            return element.category === category
        })
        res.json(filteredData)

    } else if (minPrice) {
        const filteredData = productData.filter((element) => {
            return element.price >= minPrice
        })
        res.send(filteredData)
    }
    
    else {
        res.json(productData)
    }
})

router.get("/:productID", (req, res) => {
    console.log(req.params)
    const { productID } = req.params;
    const product = productData.find((product) => product.id === Number(productID))
    res.json(product ? product : "Index Not Found")
})

router.post('/', (req, res) => {
    res.send('This api will create a producvt in database')
})

router.put('/:productID', (req, res) => {
    res.send("This api will replace product in database.")
})
router.patch('/:productID', (req, res) => {
    res.send("This api will update product in database.")
})
router.delete('/:productID', (req, res) => {
    res.send("This api will delete product in database.")
})


module.exports = router;
