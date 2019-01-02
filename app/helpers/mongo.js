const mongoose = require('mongoose');

require('../models');

mongoose.connect('mongodb://localhost:27017/makerChecker',{
    useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
    console.log('connected to mongo db');
})