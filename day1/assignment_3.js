const marks = [78, 92, 35, 88, 40, 67];

/* 

    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92

*/


let passMarks = marks.filter((elem) => {
    return elem >= 40;
})

console.log(passMarks);

let graceMarks = marks.map((elem) => {
    return elem+5;
})

console.log(graceMarks);

let greatestMark = marks.reduce((acc, elem) => {
    return acc > elem ? acc : elem;
})

console.log(greatestMark);


let firstBelow40 = marks.find((elem) => {
    return elem < 40;
})

console.log(firstBelow40);

let findIdx = marks.findIndex((elem) => {
    return elem === 92;
})
console.log(findIdx);