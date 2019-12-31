//imports
const express = require('express');
const path = require('path');
// put express router in var
const router = express.Router();

//products array
const products = [];

//get you put the url, post is form with post

router.get('/add-product',(req,res,next) => {
    //when path is /admin/add-product and get render the add-product ejs file
    //and pass it a title var
    res.render('add-product', {title: 'Add product'}); //render the view (pug, ejs,...)
});

router.post('/add-product',(req,res,next) => { //only for get app.get app.post
    //when path is /admin/add-product and post, push the new product
    //in product array and redirect
    products.push({title: req.body.title});

    res.redirect('/');

});

//export router var and products array
exports.routes = router;
exports.products = products;