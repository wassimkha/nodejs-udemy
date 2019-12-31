//imports
const express = require('express');
const path = require('path'); // concat the absolute path

//put express in var to export
const router = express.Router();


// when it's '/' show shop.html
router.get('/',(req,res,next) => {
   res.sendFile(path.join(__dirname,'..', 'views', 'shop.html')); 
   
});

//export router 
module.exports = router;