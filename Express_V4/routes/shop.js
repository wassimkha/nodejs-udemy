//imports
const express = require('express');

//import controller
const shopController = require('../controllers/shop');
//router as var
const router = express.Router();


//use the controller logic
router.get('/',shopController.getIndex);

router.get('/products',shopController.getProduct) // for the products
router.get('/cart',shopController.getCart) // for the cart
router.get('/checkout',shopController.getCheckout);
router.get('/orders', shopController.getOrders);
//export router
module.exports = router;