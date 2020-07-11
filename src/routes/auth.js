"use strict";

const 
  express = require("express"),
  router = express.Router(),
  passport = require('passport');

  router.get('/singup', (req, res) => { 
    console.log('get singup');
    
  })
  router.post('/singup', passport.authenticate('local.singup', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true
  }));

module.exports = router;