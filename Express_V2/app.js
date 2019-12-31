
//import
const express = require('express');
const bodyParser = require('body-parser'); // body parser
const path = require('path');
//routers
const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');

//set up app
const app = express();

//set uo templating engine
app.set('view engine','ejs'); // to let express know what templating engine we're using
app.set('views', 'views'); //where to find the templates

//set up body parser
app.use(bodyParser.urlencoded({extended: false}));
//set up body parser
app.use(express.static(path.join(__dirname,'public'))); //allows the public folder to be accesible by other files (read)

//route the admin (admin.js)
app.use('/admin',adminData.routes);
//route the shop (shop.js)
app.use(shopRouter);

//404 error
app.use((req,res,next) => {
    // res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    res.status(404).render('404', {title: 'Error'}); 
})

app.listen(3000);
 