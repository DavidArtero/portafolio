'use strict'

var mongoose = require('mongoose');

//Conexión a la base de datos
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/portafolio',{
        //evitar future deprecation
        useUnifiedTopology: true
        })
        .then(()=>{
            console.log("Conexión a la base de datos establecida con éxito");
        })
        //capturar error
        .catch(err => console.log(err));