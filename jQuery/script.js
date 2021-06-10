Thios is how we will change innerHTML
let para1=document.getElementById("para1");
para1.innerHTML="Welcome";



Using jQuery
$("#para1").html("Welcome bhai!");




p will have jQuery object(jQuery have lot of feature which makes javascript easy to write)
let p=$("p");
console.log(p);
let p0=p[0]; // this will return dom
let p1=p.eq(1);   //this will return jquery object
console.log(p0,p1);
we cannot use jQuery methods in p0, but can use for p1 





to hide id=para2
$("#para2").hide();




css using jQuery
let p=$("p");
console.log(p.css("background-color"));
p.css({
    "background-color":"red",
    "font-size":"100px"
})



$(".conatiner").css({
    "height":"200px",
    "width":"200px",
    "background-color":"green"
});

$(".conatiner").click(function(){
    alert("Div clicked");
})
// Similar to add event listenr
$(".conatiner").on("click",function(){
    alert("Div clicked 2");
})


$("a").on("click",function(event){
    event.preventDefault();
    alert("redirectiong to google");
});

