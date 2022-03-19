document.getElementById("button").onclick = function(){
    var choice =document.getElementById("myChoice").value;



    switch(choice){
        case "add" : 
               var  a =10;
               var b =20;
               var sum =a+b;
            //    document.write(sum);
              console.log(root.innerHTML =sum)
               break;

        case "sub" : 
               var  a =10;
               var b =20;
               var sub =a+b;
               document.write(sub);
               break;  
               
         case "mult" : 
               var  a =10;
               var b =20;
               var mult =a+b;
               document.write(mult);
               break; 
               
         default:alert("enter correct input") ;     
    }
}