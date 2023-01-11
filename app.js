const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const homeRouter = require("./routes/home");
const app = express();


var session=require('express-session');
app.use(function(req,res,next){
  res.set('cache-control','no-cache,private,no-store,must-revalidate,max-stale=0,pre-check=0');
  next();
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({ secret: "MTK", resave: true,    saveUninitialized: true, cookie:{ maxAge: 60000 } }));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/home", homeRouter);

// app.use(function(req,res, next){
//   res.set('Cache-Control, no-cache, private, must-revalidate max-stale=0')
//   next()
// })

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
module.exports = app; 


