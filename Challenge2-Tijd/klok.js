



//klok
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);

console.log('test');

if (hours >= 9 && hours <= 18){
      document.getElementById('main').classList.remove('nacht'); 
      document.getElementById('main').classList.add('dag'); 
      document.getElementById("zonMaanImg").src = "images/sun.png";
  }
else{
    document.getElementById('main').classList.remove('dag'); 
    document.getElementById('main').classList.add('nacht'); 
    document.getElementById("zonMaanImg").src = "images/maan.png";

  }

   document.getElementById('hours').innerHTML =
   h + ":";
   var t = setTimeout(startTime, 500);

   document.getElementById('minutes').innerHTML =
   m + ":";
   var t = setTimeout(startTime, 500);

   document.getElementById('seconds').innerHTML =
   s;
   var t = setTimeout(startTime, 500); 
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // getallen onder de 10 krijgen een nul
  return i;
}

//verandering in achtergrond ochtend, middag, nacht












