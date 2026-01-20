/* 

Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    
filter() students who passed (marks ≥ 40)
map() to add a grade field
        ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D

   
reduce() to calculate average marks
find() the student who scored 92
findIndex() of student "Kiran"

*/

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

let res1 = students.filter((elem) => {
    return elem.marks >= 40;
})

console.log(res1)

let res2 = students.map((elem) => {
    if(elem.marks >= 90) elem.grade = 'A';
    else if(elem.marks >= 75) elem.grade = 'B';
    else if(elem.marks >= 60) elem.grade = 'C';
    else elem.grade = 'D';
})

console.log(students);

let res3 = students.reduce((acc, elem) => {
    return acc + elem.marks;
},0) / students.length;

console.log(res3);

let res4 = students.find((elem) => {
    return elem.marks === 92;
});

console.log(res4);

let res5 = students.findIndex((elem) => {
    return elem.name === "Kiran";
});

console.log(res5);