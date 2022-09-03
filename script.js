// Convert time to a format of hours, minutes, seconds, and milliseconds
function request_fullscreen() {
  document.documentElement.webkitRequestFullScreen();
}

setInterval(function(){ 
    // document.getElementById("glow_circle").style.fill="#ff0000";
    var speedval= Number.parseFloat((Math.random() * (20 - 8 + 1)) + 8).toFixed(2);
    // var tempval=Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    document.getElementById("speed_guage").innerHTML = speedval;
    // document.getElementById("temp_display").innerHTML = tempval;
    if(speedval>18){
      playSound();
      
    }

   }, 4500);
  
  
   
   // Generate a random number between 2.5 and 10.75, including both 2.5 and 10.75, and specifying 2 decimal places
// function generateRandomDecimalInRangeFormatted(min, max, places) {
//   let value = (Math.random() * (max - min + 1)) + min;
//   return Number.parseFloat((Math.random() * (20 - 8 + 1)) + 8).toFixed(2);
// }