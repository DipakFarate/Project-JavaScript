var clock =setInterval(clocktiming,1000)

function clocktiming(){
    var date =new Date();
    var thapa =date.toLocaleTimeString();
    document.getElementById("root").innerHTML =thapa;
}
