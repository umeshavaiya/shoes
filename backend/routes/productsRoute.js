const express = require('express');
const router = express.Router();
const { getProducts, getProduct } = require('../controllers/productsController')

// GET ROUTE FOR ALL PRODUCTS
router.route('/products').get(getProducts)

// GET ROUTE FOR SINGAL PRODUCT
router.route('/products/:id').get(getProduct)


module.exports = router;