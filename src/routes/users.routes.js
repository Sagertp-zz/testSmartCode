"use strict";

const 
  express = require("express"),
  router = express.Router(),
  Controller = require("../controllers/controllers")

//-------------- Routes of API ---------------//
router.get("/api/users", (req, res) => {
  res.json({
    status: "API Works",
  });
});

//-------------- Routes of users ---------------//
router.get("/usuario", Controller.getAllusuarios);
router.get("/usuario/:id_usuario", Controller.getOneusuarios);
router.post("/addusuario", Controller.saveusuarios);
router.put("/usuario/:id_usuario", Controller.saveusuarios);
router.delete("/usuario/:id_usuario", Controller.deleteusuarios);

//-------------- Routes of tickets ---------------//
router.get("/ticket", Controller.getAlltickets);
router.get("/ticket/:id_ticket", Controller.getOnetickets);
router.post("/addticket", Controller.savetickets);
router.put("/ticket/:id_ticket", Controller.savetickets);
router.delete("/ticket/:id_ticket", Controller.deletetickets);

module.exports = router;