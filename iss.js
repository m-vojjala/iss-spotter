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



const fetchCoordsByIp = function(ip,callback) {
  request(`https://freegeoip.app/json/${ip}`,(error,response,body)=>{
    if (error) {
      callback(error,null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      let lati = JSON.parse(body).latitude;
      let longi = JSON.parse(body).longitude;

      // console.log(`latitude is ${lati}`)
      // console.log(`longitude is ${longi}`)
      let coordinates = {latitude:lati,longitude:longi};

      let {latitude,longitude} = {lati,longi};
      callback(null,coordinates);
    }
  });
};



module.exports = {fetchMyIp};
module.exports = {fetchCoordsByIp};