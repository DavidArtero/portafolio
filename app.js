//Configuración de express
'use strict'

var express = require ('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas

//middlewares (capa que se ejecuta antes de la acción del controlador)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //convertir peticiones a json

//CORS

//rutas

//exportar
module.exports = app;

