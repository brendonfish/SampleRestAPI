var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();
var cognitoidentity = new AWS.CognitoIdentity();


const USER_TABLE = 'FaceEvent';
const USER_TABLE_INDEX = 'eventToken-index';
const SECONDS_PER_HOUR = 3600;


var getFaceEvent = (faceEventID, fn) => {
  dynamodb.getItem({
    TableName: USER_TABLE,
    Key: {
      eventID: {S: faceEventID}
    }
  }, function (err, data, fn) {
    if (err) {
      fn(err, null);
    }
    else {
      if ('Item' in data) {
        let faceEventInfo = {
          faceEventID: data.Item.faceID.S,
          imgUrl: data.Item.imgUrl.S,
          timestamp: data.Item.timestamp.S
        };
        fn(null, faceEventInfo);
      } else {
        fn(null, null); // User not found
      }
    }
  });
}


module.exports = {
  getFaceEvent: this.getFaceEvent,
  saveFaceEvent: this.saveFaceEvent
}
