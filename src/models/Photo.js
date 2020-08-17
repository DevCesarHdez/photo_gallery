const { model, Schema } = require('mongoose');

const photo = new Schema({
    title: String,
    description: String,
    imageUrl: String,
    public_id: String
});

module.exports =  model('Photo', Photo);