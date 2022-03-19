const number= parseInt(prompt("enter the number"));
let isPrime=true;
if(number==1){
    console.log("1 is neither prime number");
}
else if(number>1){
    for(let i=2;i<number;i++){
        if(number%i==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log("is a prime number");
    }else{
        console.log("is a not prime number");
    }
}