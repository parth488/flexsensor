// Convert time to a format of hours, minutes, seconds, and milliseconds
function request_fullscreen() {
  document.documentElement.webkitRequestFullScreen();
}

setInterval(function(){ 
    document.getElementById("glow_circle").style.fill="#ff0000";
    var speedval=Math.floor(Math.random() * (100 - 70 + 1)) + 70;
    var tempval=Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    document.getElementById("speed_guage").innerHTML = speedval;
    document.getElementById("temp_display").innerHTML = tempval;
 if (speedval>=97){
  document.getElementById("glow_circle").style.fill="#ff0000";
  playSound()
 }

 else{
  document.getElementById("glow_circle").style.fill="#ffffff";
 }
   }, 3000);
  
  
   
   