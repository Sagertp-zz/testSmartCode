'use strict'

const
  usuariosModel = require('../models/usuario.models'),
  usuariosController = () => { }

usuariosController.getAll = (req, res) => {
  usuariosModel.getAll((err, rows) => {
    res.json(rows)
  });
}
usuariosController.getOne = (req, res) => {
  //console.log('Funciona el getOne')  
  console.log(req.params.id_usuario);
  
  let id_usuario = req.params.id_usuario
  usuariosModel.getOne(id_usuario,(err, rows) => {
    res.json(rows)
  })
}
usuariosController.save = (req, res) => {
  let usuario = {
    id_usuario: req.body.id_usuario,
    id_tipo_usuario: req.body.id_tipo_usuario,
    nombre: req.body.nombre,
    email: req.body.email,
    pass: req.body.pass
  }
  console.log([usuario])  
  usuariosModel.save(usuario, (err, rows) => {
    if (err) {
      console.log(err);
    }
    res.json({status: "usuario is saved"})
  })
}
usuariosController.delete = (req, res) => {
  let id_usuario = req.params.id_usuario
	usuariosModel.delete(id_usuario, (err, rows) => {
    res.json({status: "Usuarios Deleted"})
  })

}
/*
usuariosController.error404 = (req, res, next) => {
  console.log('Funciona el Error 404')  
}*/
module.exports = usuariosController