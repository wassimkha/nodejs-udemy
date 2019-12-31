//import the product class to store the prods
const Product = require('../models/product');






//for shop.js
exports.getIndex = (req,res,next) => {
    //when path is '/' render the shop ejs file with the array of 
    //products and a title
    const products = Product.fetchAll((products) => {
        console.log(products);
        res.render('shop/index',{prods: products, title: 'Shop'}); //render the view (pug, ejs,...)
    });
    
    
 };

 exports.getProduct = (req,res,next) => {
    const products = Product.fetchAll((products) => {
        console.log(products);
        res.render('shop/product-list',{prods: products, title: 'Product List'}); //render the view (pug, ejs,...)
    });

 }

 exports.getCart = (req,res,next) => {
    res.render('shop/cart', {title: 'Cart'});

 }

 exports.getCheckout = (req,res,next) => {
    res.render('shop/checkout', {title: 'Checkout'});

 }

 exports.getOrders = (req,res,next) => {
   res.render('shop/orders', {title: 'Orders'});
 }
