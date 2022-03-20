

const setOfWords =[" mY name is Dipak shok Farate and i am a engineer.","Hope are having fun this is a simole game ypoou caan make.","you cteatd your owwn verison"];

const msg =document.getElementById("msg");
const typeWords =document.getElementById("mywords");
const btn =document.getElementById("btn");
let startTime, endTime;

const playGame =()=>{
    let randomNumber =Math.floor( Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber]; 
    let date = new Date();
    startTime =date.getTime();
   btn.innerText ="Done";
}
const endPlay =()=>{
    let date =new Date();
    endTime =date.getTime();
    let totalTime =((endTime-startTime)/1000);
    console.log(totalTime);


    let totalStr =typeWords.value;
    let wordcount =wordCounter(totalStr);

    let speed =Math.floor((wordcount/totalTime)*60);

    let finalmsg ="you typed total at "+speed+"words per minutes";

    finalmsg+=compareWords(msg.innerText, totalStr);


    msg.innerText =finalmsg;
}

const compareWords =(str1,str2)=>{
   let words1=str1.split(" ");
   let words2=str2.split(" ");
    let count =0;
}

const wordCounter = (str)=>{
    let responce =str.split(" ").length;
    return responce;
}

btn.addEventListener('click',function(){

      if(this.innerText=='Start'){
          typeWords.disabled = false;
          playGame();
      }else if(this.innerText=="Done"){
        typeWords.disabled =true;
        btn.innerText ="Start";
        endPlay();
      }
})