
let database =[{
    username:'dipak',
    password:'11295',
}
];
let status =[
    {
      name:'Dipak Ashok Farate',
      status:' i want 50k suscriber',
    },
    {
      name:'Dipak',
      status:'i will 50k to get 50k suscriber'
    }
];
const username = prompt("Enter Your UserName");
const password =prompt("Enter Your Password");

const login =(user,password)=>{
    if(user===database[0].username && password===database[0].password){
       // console.log(stattus);
        for(let value of status){
            console.log(value);
        }
    }else{
        alert("your are wrong password");
    }
}
login(username,password);