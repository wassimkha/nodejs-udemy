//imports
const express = require('express');
const path = require('path');
//import controllers
const productController = require('../controllers/products.js');

// put express router in var
const router = express.Router();



//get you put the url, post is form with post

//using the logic in the controllers folder
router.get('/add-product',productController.getAddProduct);

router.post('/add-product',productController.postAddProduct);

//export router var and products array
exports.routes = router;