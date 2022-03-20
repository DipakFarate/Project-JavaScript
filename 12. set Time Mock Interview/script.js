// Get value

let clock = document.getElementById("clock")

//set time
setInterval(function(){
 let date = new Date();
 clock.innerHTML = date.toLocaleTimeString(); //  method
},1000);