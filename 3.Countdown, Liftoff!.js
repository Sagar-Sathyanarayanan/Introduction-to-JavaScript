var sec = 60; /* setting seconds to 60 as the questions T- counts starts at 60. If the T- count started from any other number, please enter the number in the question */

var message = "" 
while (sec >=0){
  if(sec ===50){
    message ="Orbiter transfers from ground to internal power";
 }else if(sec===31){
    message = "Ground launch sequencer is go for auto sequence start";
 }else if(sec===16){
    message = "Activate launch pad sound suppression system";
 }else if(sec===10){
    message = "Activate main engine hydrogen burnoff system";
 }else if(sec===6){
     message ="Main engine start";
 }else if(sec===0){
     message ="Solid rocket booster ignition and liftoff!";
 }else{
     message = "T-"+sec+ "seconds";
 }
 sec--; /* This is also represented by sec = sec -1. This is the formula to bring the count down from 60 secs (or any given sec) to 0. */
 console.log(message);
}