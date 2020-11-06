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

const fetchISSFlyOverTimes = function(coords, callback) {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`,(error,response,body)=>{
    if(error){
      callback(error,null)
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }else{
    let passTimes = JSON.parse(body).response;
      // console.log(data)
callback(null,passTimes);
    }
  })
  
};
const nextISSTimesForMyLocation = function(callback){
fetchMyIp((error,ip)=>{
if(error){
  return callback(error,null)
}
fetchCoordsByIp(ip,(error,coords)=>{
if(error){
  return callback(error,null);
}
fetchISSFlyOverTimes(coords,(error,nextpasses)=>{
  if(error){
    return callback(error,null)
  }
  return callback(null,nextpasses)
})
})
})
}



module.exports = {fetchMyIp};
module.exports = {fetchCoordsByIp};
module.exports = {fetchISSFlyOverTimes};
module.exports = {nextISSTimesForMyLocation};