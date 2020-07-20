//métodos o acciones para la entidad de proyectos
'use strict'

var Project = require('../models/project');

var controller = {
    home: function(req,res){
        return res.status(200).send({
            message:"Soy la home"
        })
    },

    test: function(req,res){
        return res.status(200).send({
            message: "Soy el método test del controlador"
        })
    },

    saveProject:function(req,res){

    }
};

module.exports = controller;