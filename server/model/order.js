// order
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    
    
    name: {type: String, required: true},
    bookname: {type: String, required: true},
    address: {type: String, required: true},
    
    number: {
        type: Number,
        required: true,
      }
    
});

module.exports = mongoose.model('Order', schema);