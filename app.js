const express = require('express');
const app =express();
const router = require('./routes/routes');
const path = require('path');

//Midlewares
app.use(express.json({extended : true}));
app.use(router());

//Configuracion
app.set('views', path.join(__dirname, 'views'));   

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'views')));

module.exports = app;