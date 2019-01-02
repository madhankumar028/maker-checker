const express = require('express'),
    app = express(),
    fileUpload = require('express-fileupload'),
    bodyParser = require('body-parser'),
    allRoutes = require('./app/routes'),
    mongo = require('./app/helpers/mongo');

app.use(fileUpload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', allRoutes);

app.listen(3000, () => {
    console.log('Server is up at port 3000.!!');
});
