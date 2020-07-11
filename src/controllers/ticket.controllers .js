'use strict'

const
  ticketsModel = require('../models/ticket.models'),
  ticketsController = () => { }

ticketsController.getAll = (req, res) => {
  ticketsModel.getAll((err, rows) => {
    res.json(rows)
  });
}
ticketsController.getOne = (req, res) => {
  //console.log('Funciona el getOne')  
  console.log(req.params.id_ticket);
  
  let id_ticket = req.params.id_ticket
  ticketsModel.getOne(id_ticket,(err, rows) => {
    res.json(rows)
  })
}
ticketsController.save = (req, res) => {
  let ticket = {
    id_ticket: req.body.id_ticket,
    id_usuario: req.body.id_usuario,
    ticket_pedido: req.body.ticket_pedido,
  }
  console.log([ticket])  
  ticketsModel.save(ticket, (err, rows) => {
    if (err) {
      console.log(err);
    }
    res.json({status: "ticket is saved"})
  })
}
ticketsController.delete = (req, res) => {
  let id_ticket = req.params.id_ticket
	ticketsModel.delete(id_ticket, (err, rows) => {
    res.json({status: "tickets Deleted"})
  })
}
/*
usuariosController.error404 = (req, res, next) => {
  console.log('Funciona el Error 404')  
}*/
module.exports = ticketsController