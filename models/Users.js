var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({

    firstName: { type: String, Required: 'Product name cannot be left blank.' },
    lastName: { type: String, Required: 'Product category cannot be left blank' }

});

var Users = mongoose.model('Users', userSchema, 'Users');
module.exports = Users;