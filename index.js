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
let examplecoords = {latitude : 45.4015,longitude :-75.7304};
fetchISSFlyOverTimes(examplecoords,(error,result)=>{
if(error){
  console.log("It didn't work!" , error);
    return;
}else{
  console.log('It worked! Returned result:' , result );
}
})
