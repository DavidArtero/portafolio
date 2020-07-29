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

    //Guardar nuevo proyecto
    saveProject:function(req,res){
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.yeear
        project.langs = params.langs;
        project.image = null;

        //Guardar en la base de datos
        project.save((err,projectStored)=>{
            if(err) return res.status(500).send({
                message:'Error al guardar'});
            
            if(!projectStored) return res.status(404).send({
                message: 'No se ha podido guardar el proyecto'});

            return res.status(200).send({
                project:projectStored
            });
        });
    }
};

module.exports = controller;