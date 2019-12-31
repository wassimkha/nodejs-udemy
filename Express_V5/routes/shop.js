//imports
const express = require('express');

//import controller
const shopController = require('../controllers/shop');
//router as var
const router = express.Router();


//use the controller logic
router.get('/',shopController.getIndex);

router.get('/products',shopController.getProduct); // for the products
router.get('/products/:productId',shopController.getOneProduct);
router.get('/cart',shopController.getCart); // for the cart
router.post('/cart',shopController.postCart); // for the cart
router.post('/cart-delete-item',shopController.postCartDelete);
router.get('/checkout',shopController.getCheckout);
router.get('/orders', shopController.getOrders);

//export router
module.exports = router;