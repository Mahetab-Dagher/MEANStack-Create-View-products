var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var imageSchema = new Schema({
    filename: {
         type: String,
         required: true
    },
    originalname: { 
            type: String,
            required: true
    }
});

var schema = new Schema({
    image: imageSchema,
    description: {type: String, required: true},
    price: {type: Number, required: true},
    newPrice: {type: Number, required: true},
    quantity: {type: Number,required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Product', schema);
