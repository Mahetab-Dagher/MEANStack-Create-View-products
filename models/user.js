var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    userName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    isAdmin: {type: Boolean, required: true},
    secretWord: {type: String, required: true}
    
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);
