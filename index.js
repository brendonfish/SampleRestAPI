var express = require("express");
var path = require("path");
var app = express();
var port = process.env.PORT || 8080;
var faceEventHandler = require('./Handlers/FaceEventHandler');
var faceHandler = require('./Handlers/FaceHandler');


app.use(express.static(path.join(__dirname+'/public')));
app.use(function(req, res, next){
  if (req.is('application/json')) {
  req.text = '';
  req.setEncoding('utf8');
  req.on('data', function(chunk){ req.text += chunk });
  req.on('end', next);
  } else {
  next();
  }
});


// Register Routes
var router = express.Router();
router.route('/faceEvent')
  .post( (req, res) => faceEventHandler.post(req, res))
  .get( (req, res) => faceEventHandler.get(req, res));
router.route('/face/:faceID')
  .post( (req, res, faceID) => faceHandler.post(req, res, faceID))
  .get( (req, res, faceID) => faceHandler.get(req, res, faceID));
app.use("/api", router);


// Start Server
app.listen(port);
console.log('start node at port '+port + "...");