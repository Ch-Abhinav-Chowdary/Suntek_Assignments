const marks = [78, 92, 35, 88, 40, 67];

/* 

    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92

*/


let res1 = marks.filter((elem) => {
    return elem >= 40;
})

let res2 = marks.map((elem) => {
    return elem+5;
})

let res3 = marks.reduce((acc, elem) => {
    return acc > elem ? acc : elem;
})

let res4 = marks.find((elem) => {
    return elem < 40;
})

let res5 = marks.findIndex((elem) => {
    return elem === 92;
})

console.log("Marks greater than 40: ", res1);
console.log("Marks after adding grace marks: ", res2);
console.log("Highest Mark: ", res3);
console.log("First mark below 40: ", res4);
console.log("Index of mark 92: ", res5);