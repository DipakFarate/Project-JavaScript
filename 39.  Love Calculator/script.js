document.getElementById("button").onclick =function show(){
     var mname = document.getElementById("mName").value;
     var fname = document.getElementById("fName").value;
     
   // male data
     if(mname==""){
         alert('plx enter your name')
     }else if(mname.length<=2){
      alert(' required min length 3')
     }else if(!isNaN(mname)){
         alert('only charcter number not allowed')
     }

     // Female Data
    else  if(fname==""){
        alert('plx enter your name')
    }else if(fname.length<=2){
     alert(' required min length 3')
    }else if(!isNaN(fname)){
        alert('only charcter number not allowed')
    }else{
        var lovedata=Math.random()*100;
        lovedata =Math.floor(lovedata);
        document.getElementById("root").value =lovedata+"%";
    }

}