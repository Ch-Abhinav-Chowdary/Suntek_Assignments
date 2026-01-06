const temperatures = [32, 35, 28, 40, 38, 30, 42];

/* 

    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28

*/


let filterTemp = temperatures.filter((elem)=>{
    return elem >= 35;
})

console.log(filterTemp);

let converted = temperatures.map((temp) => {
    return (temp * 9/5) + 32;
})

console.log(converted);

let avgTemp = temperatures.reduce((acc, temp) => {
    return acc + temp;
}) / temperatures.length;
console.log(avgTemp);

let firstAbove40 = temperatures.find((temp) => {
    return temp > 40;
})
console.log(firstAbove40)

let findidx = temperatures.findIndex((e) => {
    return e === 28;
})

console.log(findidx)