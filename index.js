const  {fetchMyIP,fetchCoordsByIp}  = require('./iss');

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