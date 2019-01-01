const express = require('express'),
    app = express(),
    authRoutes = require('./authRoutes'),
    checkerRoutes = require('./checkerRoutes'),
    makerRoutes = require('./makerRoutes'),
    userRoutes = require('./userRoutes');

app.use('', authRoutes);
app.use('', checkerRoutes);
app.use('', makerRoutes);
app.use('', userRoutes);

module.exports = app;
