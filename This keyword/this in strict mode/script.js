"use strict"

console.log(this);


// this keyword inside function does not belongs to any object in strict mode.
function fun(){
    console.log(this);
}
fun();



let obj={
    name:"Avishek",
    print: function(){
        console.log(this);
    }
}
obj.print();

// In order to make it belongs to some object we can use call() or apply() function.
fun.call(obj);  // function fun will belong to object obj.
fun.apply(window);

