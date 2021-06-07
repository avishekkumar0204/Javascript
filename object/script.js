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



function createStudent(name, rollNo, sem) {
    let student = new Object();
    student.name = name;
    student.rollNo = rollNo;
    student.sem = sem;
    return student;
}

let student1 = createStudent("Avishek", 4, 6);
let student2 = createStudent("Bvishek", 4.1, 6.1);
let student3 = createStudent("Cvishek", 4.2, 6.2);

console.log(student1);
console.log(student2);
console.log(student3);
