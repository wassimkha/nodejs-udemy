//import the product class to store the prods
const Product = require('../models/product');

//get add prods
exports.getAddProduct = (req,res,next) => {
    //when path is /admin/add-product and get render the add-product ejs file
    //and pass it a title var
    res.render('admin/edit-product', {
        title: 'Add product',
        editing: false,    
    }); //render the view (pug, ejs,...)
};

//post add prods
exports.postAddProduct = (req,res,next) => { //only for get app.get app.post
    //when path is /admin/add-product and post, push the new product
    //in product array and redirect
    

    //create a new Product instance and save it in array
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(null,title,imageUrl,description,price);
    product.save();
    res.redirect('/');

};

exports.getEditProduct = (req,res,next) => {
    //when path is /admin/add-product and get render the add-product ejs file
    //and pass it a title var
    const editMode = req.query.edit;
    const prodId = req.params.productId;

    Product.findById(prodId, product => {
        
        res.render('admin/edit-product', {
            title: 'Add product',
            editing: editMode,
            product: product
        }); //render the view (pug, ejs,...)

    });

   
    
};
exports.postEditProduct = (req,res,next) => {
    const prodId = req.body.productId;
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(prodId,title,imageUrl,description,price);
    product.save();
    res.redirect('/');
};
exports.getProducts = (req,res,next) => {
    const products = Product.fetchAll((products) => {
        console.log(products);
        res.render('admin/products',{prods: products, title: 'Admin Products'}); //render the view (pug, ejs,...)
    });
}

exports.postDeleteProduct = (req,res,next) => {
    const prodId = req.body.productId;
    Product.deleteById(prodId);
    res.redirect('/admin/products');
}

