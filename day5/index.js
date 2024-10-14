// let b =22/7;
// console.log(typeof b)
// let f=true;
// console.log(typeof f)
// let bol=true;
// let str = String(bol);
// console.log(typeof str);

// function display(){
//     let x = confirm("wassup");
//     alert("usr selects",x)
// }
// function display(){
//     let x = prompt("enter name","vgishere");
//     alert(x);
// }
function validate(){
   let usr=document.getElementById("login").value;
   let pass=document.getElementById("pass").value;
   let p=document.getElementById("result");
   if(login=="admin" && pass=="admin"){
    p.innerText="login-sucess";
   }
    else p.innerText="login-failed";
    return false;

   }
