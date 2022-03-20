var global ="added";

function a(){
    var fa ="2nd function";
    console.log(fa);
    debugger;
    b();
    console.log("lets see ehen i will be ");
}
function b(){
    
    console.log("2nd function");
    debugger;
    c();
}
function c(){
    debugger;
    console.log("third function");
    debugger;
    b();

}
a();