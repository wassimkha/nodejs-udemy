//imports
const express = require('express');
const path = require('path'); // concat the absolute path
const adminData = require('./admin'); //imports data from admin
//router as var
const router = express.Router();



router.get('/',(req,res,next) => {
   //when path is '/' render the shop ejs file with the array of 
   //products and a title
   console.log(adminData.products);
   const products = adminData.products; //products array

   res.render('shop',{prods: products, title: 'Shop'}); //render the view (pug, ejs,...)
   
});


//export router
module.exports = router;