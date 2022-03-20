
var FizzBuzz =[];
var i =1;

function fizbuz(){


  while(i<=100){
     if(i%3==0 && i%5==0){
         FizzBuzz.push("FizzBuzz");
        //console.log("FizzBuzz");
     }
    else if(i%3==0){
        FizzBuzz.push("fizz");
        //console.log("fizz");
    }
    else if(i%5==0){
        //console.log("Buzz");
        FizzBuzz.push("Buzz");
    }
    
    else{
        //console.log(i);
        FizzBuzz.push(i);
    }
    i++;
  }
  console.log(FizzBuzz);
}
fizbuz();
