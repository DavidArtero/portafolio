'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//molde para crear nuevos proyectos
var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

module.exports = mongoose.model('Project', ProjectSchema); 
//al guardar en la colección de Mongo siempre traduce a minusculas y plural (projects en este caso)
