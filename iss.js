const request = require("request");

const fetchMyIp = function(callback) {
  request('https://api.ipify.org?format=json',(error,response,body)=>{
    if (error) {
      callback(error,null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      let IP = JSON.parse(body).ip;

      callback(null,IP);
    }
  });
};



module.exports = fetchMyIp;