console.log(typeof(localStorage));

localStorage.setItem("Name","Avishek");
localStorage.setItem("Age",23);

// To clear the local storage
// localStorage.clear();

// overriding the age
localStorage.setItem("Age",19);

//removing the single item
localStorage.removeItem("Age");

let name=localStorage.getItem("Name");
let age=localStorage.getItem("Age");
console.log(name,age);

let impArray=["lauki","pyaz","bhindi"];
localStorage.setItem("sabzi",impArray);
console.log(typeof(localStorage.getItem("sabzi")));

localStorage.setItem("sabzi",JSON.stringify(impArray));
console.log(localStorage.getItem("sabzi"));
console.log(typeof(localStorage.getItem("sabzi")));

// This will now converted to array object
let sabziArray=JSON.parse(localStorage.getItem("sabzi"));
console.log(typeof(sabziArray));


