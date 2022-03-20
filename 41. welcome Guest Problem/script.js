// cerate Array and put all guest AName inside Array
var guestName =["dipak","uja","pillya","krishna","abu","shambhu"];

var gname =prompt("enter your name");

var checkname =guestName.includes(gname);

// alert(checkname)
if(checkname == true){
    alert("welcome you are invited")
}else{
    alert("sorry"+" "+gname+""+"You are not Invited")
}