var HttpStatus = require('http-status-codes');
var api = require('../Api');


const faceInfoRequiredKey = "faceUrl";


var getFace = (req, res, faceID) => {
  let faceInfo = api.getUserFace(faceID);
  if (faceInfo.hasOwnProperty(faceInfoRequiredKey)) {
    res.json(faceInfo);
    return;
  } else {
    res
    .status(HttpStatus.NOT_FOUND)
    .send(HttpStatus.getStatusText(HttpStatus.NOT_FOUND));
  }
};


var saveFace = (req, res) => {
  let result = api.saveUserFace(req.body);
  if (result.ok) {
    res.json(faceInfo);
    return;
  } else {
    res
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .send(HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR));
  }
};


module.exports = {
  get: getFace,
  post: saveFace
}

