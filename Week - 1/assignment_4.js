/* 

Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28


Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"



Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92

*/


//Assignment 1: Daily Temperature Analyzer

const temperatures = [32, 35, 28, 40, 38, 30, 42];

const above35 = temperatures.filter(temp => temp > 35);
console.log("Temperatures above 35°C:", above35);

const toFahrenheit = temperatures.map(temp => (temp * 9/5) + 32);
console.log("Temperatures in Fahrenheit:", toFahrenheit);

const averageTemp = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
console.log("Average Temperature:", averageTemp);

const firstAbove40 = temperatures.find(temp => temp > 40);
console.log("First temperature above 40°C:", firstAbove40);

const indexOf28 = temperatures.findIndex(temp => temp === 28);
console.log("Index of temperature 28°C:", indexOf28);



//Assignment 2: Online Course Name Processor

const courses = ["javascript", "react", "node", "mongodb", "express"];

const longCourses = courses.filter(course => course.length > 5);
console.log("Courses with name length > 5:", longCourses);

const upperCased = courses.map(course => course.toLocaleUpperCase());
console.log(upperCased);

const reducedCourses = courses.reduce((concat, course) => concat+" | "+course.toLocaleUpperCase());
console.log(reducedCourses);

const foundCourse = courses.find(course => course == "react");
console.log(foundCourse);

const indexOf = courses.findIndex(course => course === "node");
console.log(indexOf)


// Assignment 3: Student Marks List

const marks = [78, 92, 35, 88, 40, 67];

const passMarks = marks.filter(mark => mark >= 40);
console.log("Pass Marks:", passMarks);

const graceMarks = marks.map(mark => mark + 5);
console.log("Marks after adding grace marks:", graceMarks);

const highestMark = marks.reduce((max, mark) => mark > max ? mark : max, marks[0]);
console.log("Highest Mark:", highestMark);

const firstBelow40 = marks.find(mark => mark < 40);
console.log("First mark below 40:", firstBelow40);

const indexOf92 = marks.findIndex(mark => mark === 92);
console.log("Index of mark 92:", indexOf92);