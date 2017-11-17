 var dia = new Audio('audio/audio.mp3');
 var tarde = new Audio('audio/audio.mp3');
 var noche = new Audio('audio/audio.mp3');
 var band=true;

function reproducirAudio(){
    if(!band)return;
    var datetimeNow = new Date();
    var hora=datetimeNow.getHours();
    console.log(hora);
    if(hora>6 && hora <12)dia.play();
    else if(hora>11 && hora <19)tarde.play();
    else noche.play();
    document.getElementById("osito").src = "img/oso.gif";
}