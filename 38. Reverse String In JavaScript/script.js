// method 1
document.getElementById("button").onclick =function (){
    var name =document.getElementById("name").value;
    var str="";
    for(var i=name.length-1;i>=0;i--){
        str =str +name.charAt(i);
    }
    document.getElementById("rootName").value =str;
}






