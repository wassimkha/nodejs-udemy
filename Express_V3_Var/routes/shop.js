//imports
const express = require('express');

//import controller
const productsController = require('../controllers/products.js');
//router as var
const router = express.Router();


//use the controller logic
router.get('/',productsController.getProduct);


//export router
module.exports = router;