//imports
const fs = require('fs'); //file system
const path = require('path'); //paths

//the product class to save data
module.exports = class Product {
  constructor(title,imageUrl,description,price) {
      
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  //save function that write current data to the product.json file
  save() {
      //path
    const p = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'products.json'
    );
    //read file and add it to the product array
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        //if file is not empty 
        products = JSON.parse(fileContent);
      }
      //add current data
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }
    //fetch all data
    static fetchAll(cb) {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
          );
        fs.readFile(p,(err, fileContent) => {
            if (err) {
                cb([]);
            } 
            cb(JSON.parse(fileContent));
        })
    }
}