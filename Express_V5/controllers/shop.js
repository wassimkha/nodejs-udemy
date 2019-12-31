//import the product class to store the prods
const Product = require('../models/product');
const Cart = require('../models/cart');





//for shop.js
exports.getIndex = (req,res,next) => {
    //when path is '/' render the shop ejs file with the array of 
    //products and a title
    const products = Product.fetchAll((products) => {
        res.render('shop/index',{prods: products, title: 'Shop'}); //render the view (pug, ejs,...)
    });
    
    
 };

 exports.getProduct = (req,res,next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/product-list',{prods: products, title: 'Product List'}); //render the view (pug, ejs,...)
    });

 }
exports.postCartDelete = (req,res,next) => {
   const prodId = req.body.productId;
   Product.findById(prodId, product => {
      Cart.delete(prodId, product.price);
      res.redirect('/cart');
   });
   



}
 exports.getOneProduct = (req,res,next) => {
   const prodId = req.params.productId; // acces the prod it
   Product.findById(prodId, product => {
      res.render('shop/product-detail', {product: product, title: 'Details'});
   });
   
   

 }

 exports.getCart = (req,res,next) => {
    Cart.getCart(cart => {
       Product.fetchAll(products => {
          const cartProduct = [];
          for (product of products) {
             const cartProductData = cart.products.find(prod => prod.id === product.id);
             if (cartProductData){
               cartProduct.push({ProductData: product, qty: cartProductData.qty});
             }
          }
         res.render('shop/cart', {title: 'Cart',products: cartProduct});
       });
      

    });
    

 }

 exports.postCart = (req,res,next) => {
   const prodId = req.body.productId;
   Product.findById(prodId, (product) => {
      Cart.addProduct(prodId, product.price);
   })
   res.redirect('/');

}

 exports.getCheckout = (req,res,next) => {
    res.render('shop/checkout', {title: 'Checkout'});

 }

 exports.getOrders = (req,res,next) => {
   res.render('shop/orders', {title: 'Orders'});
 }
