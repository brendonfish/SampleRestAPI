var HttpStatus = require('http-status-codes');
var faceEventModel = require('../Models/FaceEventModel');


const eventInfoRequiredKey = 'faceEventID';


var getFaceEvent = (req, res) => {
  faceEventModel.getFaceEvent(eventID, (err, faceEventInfo) => {
  if (err) {
    res
    .status(HttpStatus.NOT_FOUND)
    .send(HttpStatus.getStatusText(HttpStatus.NOT_FOUND));
    return;
  }
  if (faceEventInfo.hasOwnProperty(eventInfoRequiredKey)) {
    res.json(faceEventInfo);
  } else {
    res
    .status(HttpStatus.NOT_FOUND)
    .send(HttpStatus.getStatusText(HttpStatus.NOT_FOUND));
  }
  });
};



module.exports = {
  get: getFaceEvent
}