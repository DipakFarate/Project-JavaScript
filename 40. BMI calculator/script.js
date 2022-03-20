
document.getElementById("button").onclick =function checkBMI(){
    getbmivalue();
    function getbmivalue(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;


    height =height * 12;  //   1 foot =  12 inches
    height =height*0.025;   //  height in meter     

    var newBMIValue = weight/Math.pow(height,2);
    newBMIValue = Math.round(newBMIValue);
    document.getElementById("root").value =newBMIValue;
    }

}