// controllers/productController.js
const Product = require('../models/productModel');

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new product
const addProduct = async (req, res) => {
    const { title, image, mrp, price } = req.body;

    try {
        const newProduct = new Product({ title, image, mrp, price });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getProducts,
    addProduct,
};
