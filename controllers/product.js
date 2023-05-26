//const productData = require('../data/products.json');

const ProductModel = require("../models/product");


const getAllProducts = async (req, res) => {
    const { category, minPrice, page, pageSize } = req.query;
    try {
        //Apply Filter
        if (category && minPrice) {
            const filteredData = await ProductModel.find({ category, price: minPrice });
            res.json(filteredData)
        }
        else if (category) {
            const filteredData = await ProductModel.find({ category });
            res.json(filteredData);

        } else if (minPrice) {
            const filteredData = await ProductModel.find({ price: { $gte: minPrice } });
            res.json(filteredData)
        }
        else {
            const productData = await ProductModel.find().limit(pageSize).skip((page - 1) * pageSize);
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

const createProducts = async (req, res) => {
    console.log(req.body)
    try {
        const product = await ProductModel.create(req.body)
        //res.status(200).json("Product Created Successufully!!!")
        res.status(200).json(product)

    } catch (err) {
        console.log('Something Went Wrong....')
        res.status(500).json({ message: "Something Went Wrong ", error: err });
    }
};

const replaceProducts = async (req, res) => {
    const { productID } = req.params;
    try {
        const product = await ProductModel.findByIdAndUpdate(productID, req.body, { new: true })
        res.status(200).json(product)
    } catch (err) {
        console.log('Something Went Wrong....')
        res.status(500).json({ message: "Something Went Wrong ", error: err });
    }
};
const updateProducts = async (req, res) => {
    //res.send("This api will update product in database.")
    const { productID } = req.params;
    try {
        const product = await ProductModel.findByIdAndUpdate(productID, req.body, { new: true })
        //res.status(200).json("Product Updated!!!")
        res.status(200).json(product)
    } catch (err) {
        console.log('Something Went Wrong....')
        res.status(500).json({ message: "Something Went Wrong ", error: err });
    }
};
const deleteProducts = async (req, res) => {
    //res.send("This api will delete product in database.") 
    const { productID } = req.params;
    try {
        const product = await ProductModel.findByIdAndDelete(productID, req.body, { new: true })
        //res.send(200).json("Product Deleted Successfully")
        res.status(200).json(product)
    } catch (err) {
        console.log('Something Went Wrong....')
        res.status(500).json({ message: "Something Went Wrong ", error: err });
    }
};

module.exports = {
    getAllProducts,
    getSingleProducts,
    createProducts,
    replaceProducts,
    updateProducts,
    deleteProducts
}