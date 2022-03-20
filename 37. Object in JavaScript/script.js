var obj ={
     firstname:"dipak",
     age:25,
     profession:"web Developer",
     lastname :"farate"
}
console.log(obj);
console.log(obj.firstname);


// change property name
obj.firstname ="uja";
console.log(obj.firstname);


// add a new property
obj.middlename="dipak";
console.log(obj);

// delete property name
delete obj.profession;
console.log(obj);