
//imports
const express = require('express');
const bodyParser = require('body-parser'); // body parser
const path = require('path');

//routers
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express(); //starting app


app.use(bodyParser.urlencoded({extended: false})); // parser setup

// ^^ for css
app.use(express.static(path.join(__dirname,'public'))); //allows the public folder to be accesible by other files (read)


//route the admin
app.use('/admin',adminRouter);

//route the shop
app.use(shopRouter);

//404 error
app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(3000);
 