//const productData = require('../data/products.json');

const ProductModel = require("../models/product");

const home = (req, res) => {
    res.send("Welcome To The ECOMMERCE SITE...")
}

const getAllProducts = async (req, res) => {
    const { category, minPrice } = req.query;
    try {
        //Apply Filter
        if (category && minPrice) {
            const filteredData = await ProductModel.find({ category, price: minPrice, });
            res.json(filteredData)
        }
        else if (category) {
            const filteredData = await ProductModel.find({ category });
            res.json(filteredData);

        } else if (minPrice) {
            const filteredData = await ProductModel.find({ price: minPrice });
            res.json(filteredData)
        }
        else {
            const productData = await ProductModel.find();
            res.json(productData)
        }
    } catch (err) {
        res.status(500).json({ message: "Something went Wrong", error: err });
    }
}

    const getSingleProducts = async (req, res) => {
        try {
            const { productID } = req.params;
            const product = await ProductModel.findById(productID)
            res.json(product ? product : "Data Not Found")

        } catch (err) {
            console.log('Something Went Wrong....')
        
        res.status(500).json({ message: "Something Went Wrong ", error: err });

    }
};

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