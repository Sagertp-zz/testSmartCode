"use strict";

const 
  usuariosModel = require("../models/usuario.models"),
  ticketsModel = require("../models/ticket.models"),
  Controller = () => {};

//--------- Usuarios -----------------//

Controller.getAllusuarios = (req, res) => {
  usuariosModel.getAll((err, rows) => {
    res.json(rows);
  });
};
Controller.getOneusuarios = (req, res) => {
  //console.log('Funciona el getOne')
  console.log(req.params.id_usuario);

  let id_usuario = req.params.id_usuario;
  usuariosModel.getOne(id_usuario, (err, rows) => {
    res.json(rows);
  });
};
Controller.saveusuarios = (req, res) => {
  let usuario = {
    id_usuario: req.body.id_usuario,
    id_tipo_usuario: req.body.id_tipo_usuario,
    nombre: req.body.nombre,
    email: req.body.email,
    pass: req.body.pass,
  };
  console.log([usuario]);
  usuariosModel.save(usuario, (err, rows) => {
    if (err) {
      console.log(err);
    }
    res.json({ status: "usuario is saved" });
  });
};
Controller.deleteusuarios = (req, res) => {
  let id_usuario = req.params.id_usuario;
  usuariosModel.delete(id_usuario, (err, rows) => {
    res.json({ status: "Usuarios Deleted" });
  });
};

//--------- Tickets -----------------//

Controller.getAlltickets = (req, res) => {
  console.log(req.user.id_usuario);
  
  ticketsModel.getAll( 48, 1, (err, rows) => {
    res.json(rows);
  });
};
Controller.getOnetickets = (req, res) => {
  //console.log('Funciona el getOne')
  console.log(req.params.id_ticket);

  let id_ticket = req.params.id_ticket;
  ticketsModel.getOne(id_ticket, (err, rows) => {
    res.json(rows);
  });
};
Controller.savetickets = (req, res) => {
  let ticket = {
    id_ticket: req.body.id_ticket,
    id_usuario: req.body.id_usuario,
    ticket_pedido: req.body.ticket_pedido,
  };
  console.log([ticket]);
  ticketsModel.save(ticket, (err, rows) => {
    if (err) {
      console.log(err);
    }
    res.json({ status: "ticket is saved" });
  });
};
Controller.deletetickets = (req, res) => {
  let id_ticket = req.params.id_ticket;
  ticketsModel.delete(id_ticket, (err, rows) => {
    res.json({ status: "tickets Deleted" });
  });
};
/*
usuariosController.error404 = (req, res, next) => {
  console.log('Funciona el Error 404')  
}*/
module.exports = Controller;