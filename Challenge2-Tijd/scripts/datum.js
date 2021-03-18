
//dag, getal en maand 

var today = new Date();

var dagen = new Array('zondag', 'maandag', 'dinsdag','woensdag', 'donderdag', 'vrijdag', 'zaterdag');
var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
document.getElementById('dagMaand').innerHTML = dagen[today.getDay()] + ' ' + today.getDate() + ' ' + maanden[today.getMonth()];

