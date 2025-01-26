const express = require('express');
const Products = require('./controllers/products');

const listMok = require('./mock-products.json');

const productList = new Products(listMok);

const router = express.Router();

router.get('/', (req, res) => {
	res.send(productList.getListOfProducts());
});

module.exports = router;
