let container = document.querySelector(".container");
container.addEventListener('mouseover', function () {
    console.log("Mouse in");
    
});
container.addEventListener('mouseout', function () {
    console.log("Mouse out");
});




// Keyboard events
let inp=document.getElementById("name");
inp.addEventListener("keypress",function(){
    console.log("Key pressed");
})
// Too many keys are not detected by keypress(up,down,left,right,alt,shift...);


document.addEventListener("keydown",function(){
    console.log("Key down");
});
document.addEventListener("keyup",function(){
    console.log("Key up");
});


inp.addEventListener("keypress",function(event){
    console.log(event.keyCode);
});


