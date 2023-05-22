const productData = require('../data/products.json');

const home = (req, res) => {
    res.send("Welcome To The ECOMMERCE SITE...")
}

const getAllProducts = (req, res) => {
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
}
const getSingleProducts = (req, res) => {
    console.log(req.params)
    const { productID } = req.params;
    const product = productData.find((product) => product.id === Number(productID))
    res.json(product ? product : "Index Not Found")
}

const createProducts = (req, res) => {
    res.send('This api will create a product in database')
}

const replaceProducts = (req, res) => {
    res.send("This api will replace product in database.")
}
const updateProducts = (req, res) => {
    res.send("This api will update product in database.")
}
const deleteProducts = (req, res) => {
    res.send("This api will delete product in database.")
}

module.exports = {
    home,
    getAllProducts,
    getSingleProducts,
    createProducts,
    replaceProducts,
    updateProducts,
    deleteProducts

}