
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

// if (hours >= 9 && hours <= 18){
//   document.getElementById('main').classList.remove('nacht'); 
//   document.getElementById('main').classList.add('dag'); 
// }
// else{
// document.getElementById('main').classList.remove('dag'); 
// document.getElementById('main').classList.add('nacht'); 

// }

//Hieronder cod evan Fedor
function change() {

  var hoeLaatIsHet = new Date();

   //If statement die zegt dat als het uur in de klok hoger dan 8 is en lager dan 20 een stuk code wordt uitgevoerd. Kortom als het overdag is van 9:00 t/m 19:59
  if (hoeLaatIsHet.getHours() >= 8 && hoeLaatIsHet.getHours() <= 18) { //als je wil testen of het werkt pas dan de uren hier aan en ververs de website
     //Dan wordt een een klasse dag toegevoegd aan HTML element waarvan jij wil dat het uiterlijk verranderd en de klasse nacht verwijderd. 
     document.getElementById('main').classList.add('dag');
     document.getElementById('main').classList.remove('nacht');
     document.getElementById("zonMaanImg").src = "images/sun.png";
   // VERANDERING IMAGE
  // document.getElementsByTagName('body')[0].style.backgroundImage = "url('zon.png')";
   //document.getElementById('maanbox').src = "images/zon.png"; // afbeelding aanpassen als het dag is 
 } else {
    //ELse wordt uitgevoerd als niet aan de voorwaarde voldaan wordt van de if. Dus tijddens alle andere uren (of te wel nacht) wordt de volgende code uitgevoerd.
   //Waarbij dus juist nacht wordt toegevoegd en dag verwijdert.
   document.getElementById('main').classList.add('nacht');
   document.getElementById('main').classList.remove('dag');
   document.getElementById("zonMaanImg").src = "images/maan.png";

  //VERANDERING IMAGE
 // document.getElementById('maanbox').src = "images/maan.png";// afbeelding aanpassen als het nacht is
  //document.getElementsByTagName('body')[0].style.backgroundImage = "url('zon.png')";
}
};


change();

// //De set interval zorgt dat hij iedere 1000 miliseconde de functie change uitvoerd. 
setInterval(change, 1000);



