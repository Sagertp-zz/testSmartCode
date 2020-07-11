"use strict";

const conn = require("./dbconnection"),
  ticketsModel = () => {};

ticketsModel.getAll = (cb) => conn.query("SELECT * FROM ticket", cb);
ticketsModel.getOne = (id, cb) => conn.query("SELECT * FROM ticket WHERE id_ticket = ?", [id], cb);
ticketsModel.save = (ticket, cb) => {
  conn.query(
    "SELECT * FROM ticket WHERE id_ticket = ?",
    ticket.id_ticket,
    (err, rows) => {
      if (err) {
        return err;
      } else {
        return rows.length == 1
          ? conn.query(
              "UPDATE ticket SET ? WHERE id_ticket = ?",
              [ticket, ticket.id_ticket],
              cb
            )
          : conn.query("INSERT INTO ticket SET ?", ticket, cb);
      }
    }
  );
};
ticketsModel.delete = (id, cb) => conn.query("DELETE FROM ticket WHERE id_ticket = ?", [id], cb);

module.exports = ticketsModel;