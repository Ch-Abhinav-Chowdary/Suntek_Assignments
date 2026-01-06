const courses = ["javascript", "react", "node", "mongodb", "express"];

/* 

    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"

*/

let res1 = courses.filter((course)=>{
    return course.length > 5;
})

let res2 = courses.map((elem) => {
    return elem.toUpperCase();
})

let res3 = courses.reduce((acc, elem) => {
    return acc+ " / " +elem.toUpperCase();
})

let res4 = courses.find((course) => {
    return course === "react";
})

let res5 = courses.findIndex((course) => {
    return course === "node";
})

console.log("Course length greater than 5: ", res1);
console.log("Courses in Uppercase: ", res2);
console.log("Courses as single string: ", res3);
console.log("Finding course react: ", res4);
console.log("Index of course node: ", res5);