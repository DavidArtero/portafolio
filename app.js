//Configuración de express
'use strict'

var express = require ('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
var project_routes = require('./routes/project');

//middlewares (capa que se ejecuta antes de la acción del controlador)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //convertir peticiones a json

//CORS

//rutas
app.use('/api',project_routes);


//exportar
module.exports = app;

