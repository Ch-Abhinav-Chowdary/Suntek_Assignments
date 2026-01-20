/* 

You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    
Use filter() to get only inStock products
Use map() to create a new array with:  { name, totalPrice }
Use reduce() to calculate grand total cart value
Use find() to get details of "Mouse"
Use findIndex() to find the position of "Keyboard"

*/


const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

let res1 = cart.filter((item) => {
    return item.inStock === true;
})

let res2 = cart.map((e) => {
    return {
        name: e.name,
        totalPrice: e.price * e.quantity
    }
})

let res3 = cart.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
}, 0)

let res4 = cart.find((item) => {
    return item.name === "Mouse";
})

let res5 = cart.findIndex((item) => {
    return item.name === "Keyboard";
})


console.log("In Stock Products: ", res1);
console.log("Products with Total Price: ", res2);
console.log("Grand Total Cart Value: ", res3);
console.log("Details of Mouse: ", res4);
console.log("Index of Keyboard: ", res5);