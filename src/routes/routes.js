"use strict";

const 
  express = require("express"),
  router = express.Router(),
  Controller = require("../controllers/controllers"),
  { isLoggedIn } = require('../lib/isauth');

//-------------- Routes of API ---------------//
router.get("/api/users", (req, res) => {
  res.json({
    status: "API Works",
  });
});

//-------------- Routes of users ---------------//
router.get("/usuario", isLoggedIn, Controller.getAllusuarios);
router.get("/usuario/:id_usuario", isLoggedIn, Controller.getOneusuarios);
router.post("/addusuario", isLoggedIn, Controller.saveusuarios);
router.put("/usuario/:id_usuario", isLoggedIn, Controller.saveusuarios);
router.delete("/usuario/:id_usuario", isLoggedIn, Controller.deleteusuarios);

//-------------- Routes of tickets ---------------//
router.get("/ticket", isLoggedIn, Controller.getAlltickets);
router.get("/ticket/:id_ticket", isLoggedIn, Controller.getOnetickets);
router.post("/addticket", isLoggedIn, Controller.savetickets);
router.put("/ticket/:id_ticket", isLoggedIn, Controller.savetickets);
router.delete("/ticket/:id_ticket", isLoggedIn, Controller.deletetickets);

module.exports = router;