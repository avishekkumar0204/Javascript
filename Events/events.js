function sayHello(){
    alert("Hello");
}
function sayHi(){
    alert("Hi");
}
function sayHiiiiiiiii(){
    alert("Hiiiiiiiii");
}
// Using eventlistner we can add more than one events
let hiBtn=document.getElementById("hiBtn");
hiBtn.addEventListener("click",sayHi);
hiBtn.addEventListener("click",sayHiiiiiiiii);