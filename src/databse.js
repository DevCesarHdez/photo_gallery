const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.0.100:28017/gallery_photo_db',{
    useNewUrlParser: true
})
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err))