const mongoose = require('mongoose');

class Mongo {
  constructor() {
    // Im using localhost without security just because its easier lol
    mongoose.connect("mongodb://localhost:27017")
      .then( () => console.log("connected to DB."))
      .catch( err => console.log(err));
  }


}

module.exports = Mongo;