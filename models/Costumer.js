var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Costumer = new Schema({
    name: {
        first: {type: String},
        last: {type: String}
    },
    gender: {
        type: String
    },
    birthday: {
        type: Date
    },
    lastContact: {
        type: Date
    },
    customerLifetimeValue: {
        type: Number
    }
},{
    collection: 'costumers'
});

module.exports = mongoose.model('Costumer', Costumer);