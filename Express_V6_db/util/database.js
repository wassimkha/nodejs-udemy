const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
let _db;
//function that connects to mongoDb
const mongoConnect = (callback) => {
  
  //Connect our mongoDb client to our cloud instance
MongoClient.connect('mongodb+srv://wassim:wassim@cluster0-5yja3.azure.mongodb.net/shop?retryWrites=true&w=majority')
.then(client => {
  console.log("Connected!");
  _db = client.db();
  callback(client); // call the cb function, to return result
})
.catch(err => {
  console.log(err);
  throw err;
});
}


//allows us to reuse the connection
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found';
}


exports.mongoConnect = mongoConnect; // export the function to run the server

exports.getDb = getDb; // function to reuse