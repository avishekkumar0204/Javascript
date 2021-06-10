// let student1={
//     name:"Avishek",
//     rollNo:4,
//     sem: 6
// };
// let student2={
//     name:"Bvishek",
//     rollNo:4.1,
//     sem:6.1
// }



// function createStudent(name, rollNo, sem) {
//     let student = new Object();
//     student.name = name;
//     student.rollNo = rollNo;
//     student.sem = sem;
//     return student;
// }

// let student1 = createStudent("Avishek", 4, 6);
// let student2 = createStudent("Bvishek", 4.1, 6.1);
// let student3 = createStudent("Cvishek", 4.2, 6.2);

// console.log(student1);
// console.log(student2);
// console.log(student3);

function Student(name, rollNo, sem) {
    console.log(this);
    this.name = name;
    this.rollNo = rollNo;
    this.sem = sem;
}

// this inside function will refer to object which we have created here using new keyword.
let student1 = new Student("Avishek", 4, 6);
console.log(student1);

// this inside function will refer to global object(window) here.
let student2 =Student("Bvishek", 4.1, 8.1);
console.log(student2);

