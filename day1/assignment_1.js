const temperatures = [32, 35, 28, 40, 38, 30, 42];

/* 

    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28

*/


let res1 = temperatures.filter((elem)=>{
    return elem >= 35;
})

let res2 = temperatures.map((temp) => {
    return (temp * 9/5) + 32;
})

let res3 = temperatures.reduce((acc, temp) => {
    return acc + temp;
}) / temperatures.length;

let res4 = temperatures.find((temp) => {
    return temp > 40;
});

let res5 = temperatures.findIndex((e) => {
    return e === 28;
});


console.log("Temperatures above 35: ", res1);
console.log("Temperatures in Fahrenheit: ", res2);
console.log("Average Temperature: ", res3);
console.log("First temperature above 40: ", res4);
console.log("Index of temperature 28: ", res5);