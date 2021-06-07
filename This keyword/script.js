// this keyword= this keyword refers to Object which it belongs to. 


console.log(this);



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