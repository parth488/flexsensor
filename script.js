// Convert time to a format of hours, minutes, seconds, and milliseconds
function request_fullscreen() {
  document.documentElement.webkitRequestFullScreen();
}

setInterval(function(){ 
    // document.getElementById("glow_circle").style.fill="#ff0000";
    var speedval= Number.parseFloat((Math.random() * (19 - 8 + 1)) + 8).toFixed(2);
    // var tempval=Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    document.getElementById("speed_guage").innerHTML = speedval;
    // document.getElementById("temp_display").innerHTML = tempval;
    if(speedval>18){
      playSound();
      
    }
    change_prog();
   }, 1500);
    
   function change_prog(){
    let y = Math.floor((Math.random() * 100) + 1);
    let x = Math.floor((Math.random() * 100) + 1);
    let z = Math.floor((Math.random() * 100) + 1);
    let percent = x + '%';
    let percent2 = y + '%';
    let percent1 = z + '%';
    // document.getElementsByClassName("progress").style.width = percent;
    document.getElementById("html_prog").style.width = percent;
    document.getElementById("css_prog").style.width = percent1;
    document.getElementById("js_prog").style.width = percent2;

}
   
   // Generate a random number between 2.5 and 10.75, including both 2.5 and 10.75, and specifying 2 decimal places
// function generateRandomDecimalInRangeFormatted(min, max, places) {
//   let value = (Math.random() * (max - min + 1)) + min;
//   return Number.parseFloat((Math.random() * (20 - 8 + 1)) + 8).toFixed(2);
// }