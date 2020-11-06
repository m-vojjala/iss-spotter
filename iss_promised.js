const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIp = function(body){
  const ip = JSON.parse(body).ip;
  console.log(ip)
  return request(`https://freegeoip.app/json/${ip}`)
  
}

const fetchISSFlyOverTimes = function(body){
  let lati = JSON.parse(body).latitude;
      let longi = JSON.parse(body).longitude;

      // console.log(`latitude is ${lati}`)
      // console.log(`longitude is ${longi}`)
      let coordinates = {latitude:lati,longitude:longi};

      let {latitude,longitude} = {lati,longi}
  return request(`http://api.open-notify.org/iss-pass.json?lat=${coordinates.latitude}&lon=${coordinates.longitude}`)
}

const nextISSTimesForMyLocation = function(){
  return fetchMyIP()
  .then(fetchCoordsByIp)
  .then(fetchISSFlyOverTimes)
  .then(data=>{
    const {response} = JSON.parse(data);
    return response
  })
}

module.exports = {nextISSTimesForMyLocation} 


