const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marioModel = new Schema({
    name: {type:String},
    weight: {type:Number}
})
//  Your code goes here


module.exports = marioModel;