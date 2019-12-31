//imports
const express = require('express');
const path = require('path');

//put express in var to be able to export it
const router = express.Router();

//get you put the url, post is form with post

//when it's get, you show add-product.html
router.get('/add-product',(req,res,next) => {
    res.sendFile(path.join(__dirname,'..','views','add-product.html'));
});

//when it's post, log body and redirect to '/'
router.post('/product',(req,res,next) => { //only for get app.get app.post
    console.log(req.body);
    res.redirect('/');

});
//export express as a var to be able to use it in app.js
module.exports = router;