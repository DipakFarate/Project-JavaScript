var d =new Date();
document.write(d)



document.write("<br>");


// print date exapmle 2022/3/18
var dateObj =new Date();
var month =dateObj.getUTCMonth()+1;
var day =dateObj.getUTCDate();
var year =dateObj.getUTCFullYear();

document.write(year+"/"+month+"/"+day)

