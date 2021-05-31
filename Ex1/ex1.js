let box=document.querySelector(".box");
let count=0;
let noOfTimes=document.getElementById("noOfTimes");
box.addEventListener("click",function(){
    count++;
    noOfTimes.innerHTML=`${count} `;

});