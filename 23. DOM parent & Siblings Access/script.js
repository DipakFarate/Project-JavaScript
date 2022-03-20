// accesss children of a body

var child  =document.body.children;
console.log(child);


// add new child in a body
var para = document.createElement("p");
var textNode =document.createTextNode("this is nrew para.");
para.appendChild(textNode);
console.log(para);

document.body.appendChild(para)



// access first child and last child

var list =document.querySelector("ul");
console.log(list);

console.log(list.firstChild);

console.log(list.lastChild);




// access siblings
var firstSibling =thapa.nextElementSibling;
console.log(firstSibling);
