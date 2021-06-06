const mongoose = require('mongoose');


// mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connect('mongodb://localhost/social-media_development', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error',console.error.bind(console,"error connection to mongoDB"));

db.once('open',function(){
    console.log('connected to database:: MongoDB');
});

module.exports = db;

