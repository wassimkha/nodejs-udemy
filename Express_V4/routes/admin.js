//imports
const express = require('express');
const path = require('path');
//import controllers
const adminController = require('../controllers/admin');

// put express router in var
const router = express.Router();



//get you put the url, post is form with post

//using the logic in the controllers folder
router.get('/add-product',adminController.getAddProduct);

//admin/product => get
router.get('/products',adminController.getProducts);

router.post('/add-product',adminController.postAddProduct);

//export router var and products array
exports.routes = router;