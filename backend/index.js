'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

//Conexión a la base de datos
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/portafolio',{
        //evitar future deprecation
        useUnifiedTopology: true,
        'useNewUrlParser': true
        })
        .then(()=>{
            console.log("Conexión a la base de datos establecida con éxito");

            //Creación del servicio
            app.listen(port,()=>{
                console.log("Servidor corriendo correctamente en la url: localhost:3700");
            });
        })
        //capturar error
        .catch(err => console.log(err));