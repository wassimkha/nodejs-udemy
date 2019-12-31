//import the product class to store the prods
const Product = require('../models/product');



//get add prods
exports.getAddProduct = (req,res,next) => {
    //when path is /admin/add-product and get render the add-product ejs file
    //and pass it a title var
    res.render('add-product', {title: 'Add product'}); //render the view (pug, ejs,...)
};

//post add prods
exports.postAddProduct = (req,res,next) => { //only for get app.get app.post
    //when path is /admin/add-product and post, push the new product
    //in product array and redirect
    

    //create a new Product instance and save it in array
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');

};


//for shop.js
exports.getProduct = (req,res,next) => {
    //when path is '/' render the shop ejs file with the array of 
    //products and a title
    const products = Product.fetchAll();
    console.log(products);
    
 
    res.render('shop',{prods: products, title: 'Shop'}); //render the view (pug, ejs,...)
    
 };