const ApiErrorMessage = {
  UNAUTHORIZED: "Unauthorized",
  BAD_REQUEST: "Bad Request",
  NOT_SUPPORTED: "Not Supported",
  TIMEOUT: "Timeout"
}


var getUserFace = (faceID) => {
  let userFaceInfo = {
    faceID: faceID,
    faceUrl: "https://dictionary.cambridge.org/zht/images/thumb/hambur_noun_002_17078.jpg?version=5.0.74"
  }
  return userFaceInfo;
};


var saveUserFace = (faceInfo) => {
  if (true){
    return { ok: true, error:null};
  } else {
    return { ok: false, error: ApiErrorMessage.TIMEOUT};
  }
}


module.exports = {
  getUserFace: getUserFace,
  saveUserFace: saveUserFace
}

