const  {fetchMyIP,fetchCoordsByIp,fetchISSFlyOverTimes}  = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIp('174.115.198.115',(error,coord)=>{
//   if(error){
//     console.log("It didn't work!" , error);
//         return;
//   }
//   else{
//     console.log('It worked! Returned coordinates:' , coord );
//   }
// })
// let examplecoords = {latitude : 45.4015,longitude :-75.7304};
// fetchISSFlyOverTimes(examplecoords,(error,result)=>{
// if(error){
//   console.log("It didn't work!" , error);
//     return;
// }else{
//   console.log('It worked! Returned result:' , result );
// }
// })

const { nextISSTimesForMyLocation } = require('./iss');


  const printPassTimes = function(passTimes) {
    for (const pass of passTimes) {
      const datetime = new Date(0);
      datetime.setUTCSeconds(pass.risetime);
      const duration = pass.duration;
      console.log(`Next pass at ${datetime} for ${duration} seconds!`);
    }
  };
  


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
printPassTimes(passTimes)
});
