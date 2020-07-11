const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const myConn = require('../models/dbconnection');
const helpers = require('./helpers');

passport.use('local.singup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'pass',
  passReqToCallback: true
}, async (req, email, pass, done) => {
  const { nombre, id_tipo_usuario } = req.body;
  let newUser = {
    id_tipo_usuario,
    nombre,
    email,
    pass
  };
  newUser.pass = await helpers.encryptPassword(pass);
  // Saving in the Database
  const result = await myConn.query('INSERT INTO usuarios SET ? ', newUser);
  console.log(result);
  
  //newUser.id = result.insertId;
  //return done(null, newUser);
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const rows = await myConn.query('SELECT * FROM users WHERE id = ?', [id]);
  done(null, rows[0]);
});