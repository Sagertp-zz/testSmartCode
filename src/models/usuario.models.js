"use strict";

const conn = require("./dbconnection"),
  usuariosModel = () => {};

usuariosModel.getAll = (cb) => conn.query("SELECT * FROM usuarios", cb);
usuariosModel.getOne = (id, cb) => conn.query("SELECT * FROM usuarios WHERE id_usuario = ?", [id], cb);
usuariosModel.save = (usuario, cb) => {
  conn.query(
    "SELECT * FROM usuarios WHERE id_usuario = ?",
    usuario.id_usuario,
    (err, rows) => {
      if (err) {
        return err;
      } else {
        return rows.length == 1
          ? conn.query(
              "UPDATE usuarios SET ? WHERE id_usuario = ?",
              [usuario, usuario.id_usuario],
              cb
            )
          : conn.query("INSERT INTO usuarios SET ?", usuario, cb);
      }
    }
  );
};
usuariosModel.delete = (id, cb) => conn.query("DELETE FROM usuarios WHERE id_usuario = ?", [id], cb);

module.exports = usuariosModel;