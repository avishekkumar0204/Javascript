let inner=document.querySelector(".inner");
inner.addEventListener("click",function(event){
    alert("Inner div");
    // stoppropagation() to stop propagation of event from child to parent
    event.stopPropagation();

});

let outer=document.querySelector(".outer");
outer.addEventListener("click",function(){
    alert("Outer div");
});

document.addEventListener("click",function(){
    alert("Document");
})