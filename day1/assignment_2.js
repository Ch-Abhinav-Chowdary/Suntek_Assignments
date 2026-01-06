const courses = ["javascript", "react", "node", "mongodb", "express"];

/* 

    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"

*/

let lenG5 = courses.filter((course)=>{
    return course.length > 5;
})

console.log(lenG5);

let upperCased = courses.map((elem) => {
    return elem.toUpperCase();
})

console.log(upperCased);

let singleString = courses.reduce((acc, elem) => {
    return acc+ " / " +elem.toUpperCase();
})

console.log(singleString);

let findCourse = courses.find((course) => {
    return course === "react";
})

console.log(findCourse);


let findIdx = courses.findIndex((course) => {
    return course === "node";
})

console.log(findIdx);