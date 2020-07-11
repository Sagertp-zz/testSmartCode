"use strict";

const 
  express = require("express"),
  app = express(),
  morgan = require("morgan"),
  path = require("path"),
  session = require('express-session'),
  MySQLStore = require('express-mysql-session')(session),
  conection =  require('./models/dbconfig.json'),
  passport = require('passport');


// Intializations
require('./lib/passport');


//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(session({
  secret: '1qazxsw2*-',
  resave: true,
  saveUninitialized: true,
  store: new MySQLStore(conection.mysql)
}))
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}))
app.use(express.json()); 
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use(require("./routes/users.routes"));
app.use(require("./routes/auth"));

//Statics files
app.use(express.static(path.join(__dirname, "public")));

//Server tart
app.listen(app.get("port"), () => {
  console.log(`Server is runing on port ${app.get("port")}`);
});
