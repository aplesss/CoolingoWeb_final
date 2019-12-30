const express = require("express");
const app = express();
var cors = require('cors');
app.use(cors({origin: '*'}));
// parse requests of content-type: application/json

// parse requests of content-type: application/x-www-form-urlencoded
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*"); // allow request from all origin
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization");

  // Pass to next layer of middleware
  next();
});
require("./router")(app);
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to test api applcation" });
});

// set port, listen for requests
app.listen(5555,() => {
  console.log("Server is running on port 5555.");
});