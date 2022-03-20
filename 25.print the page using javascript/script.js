document.getElementById("wholepage").onclick = function page(){
   window.print();

}

document.getElementById("divone").onclick = function myfun (){
    var backup =document.body.innerHTML;
    var divcontent =document.getElementById("divone").innerHTML;

    document.body.innerHTML =divcontent;
    window.print();
    document.body.innerHTML =backup;
   }


   document.getElementById("divtwo").onclick = function myfun (){
    var backup =document.body.innerHTML;
    var divcontent =document.getElementById("divtwo").innerHTML;

    document.body.innerHTML =divcontent;
    window.print();
    document.body.innerHTML =backup;
   }


   document.getElementById("divthree").onclick = function myfun (){
    var backup =document.body.innerHTML;
    var divcontent =document.getElementById("divthree").innerHTML;

    document.body.innerHTML =divcontent;
    window.print();
    document.body.innerHTML =backup;
   }