/* 

ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"


ASSIGNMENT 2:
-------------
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
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"


ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"


ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"


ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000

*/


// you are building a shopping cart summary for an e-commerce website.

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

const inStockProducts = cart.filter(item => item.inStock);
console.log("In-stock products:", inStockProducts);

const productTotals = inStockProducts.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));
console.log("Product totals:", productTotals);

const grandTotal = productTotals.reduce((sum, item) => sum + item.totalPrice, 0);
console.log("Grand total cart value: ₹" + grandTotal);

const mouseDetails = cart.find(item => item.name === "Mouse");
console.log("Details of Mouse:", mouseDetails);

const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");
console.log("Index of Keyboard:", keyboardIndex);





// Student Performance Dashboard

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

const passedStudents = students.filter(student => student.marks >= 40);
console.log("Passed students:", passedStudents);

students.map(student => {
    if (student.marks >= 90) {
        student.grade = 'A';
    } else if (student.marks >= 75) {
        student.grade = 'B';
    } else if (student.marks >= 60) {
        student.grade = 'C';
    } else {
        student.grade = 'D';
    }
});

console.log(students);

const averageMarks = students.reduce((sum, student) => sum + student.marks, 0) / students.length;
console.log("Average marks:", averageMarks);

const student92 = students.find(student => student.marks === 92);
console.log("Student who scored 92:", student92);

const kiranIndex = students.findIndex(student => student.name === "Kiran");
console.log("Index of Kiran:", kiranIndex);




// Employee Payroll Processor
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

const itEmployees = employees.filter(emp => emp.department === "IT");
console.log("IT Employees:", itEmployees);

const employeesWithNetSalary = itEmployees.map(emp => ({
  ...emp,
  netSalary: emp.salary + (emp.salary * 0.10)
}));
console.log("Employees with Net Salary:", employeesWithNetSalary);

const totalSalaryPayout = employeesWithNetSalary.reduce((sum, emp) => sum + emp.netSalary, 0);
console.log("Total Salary Payout: " + totalSalaryPayout);

const employee30000 = employees.find(emp => emp.salary === 30000);
console.log("Employee with salary 30000:", employee30000);

const nehaIndex = employees.findIndex(emp => emp.name === "Neha");
console.log("Index of Neha:", nehaIndex);




// Movie Streaming Platform

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

const sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
console.log("Sci-Fi Movies:", sciFiMovies);

const movieTitlesWithRatings = movies.map(movie => `${movie.title} (${movie.rating})`);
console.log("Movie Titles with Ratings:", movieTitlesWithRatings);

const averageRating = movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
console.log("Average Movie Rating:", averageRating);

const jokerMovie = movies.find(movie => movie.title === "Joker");
console.log("Details of Joker movie:", jokerMovie);

const avengersIndex = movies.findIndex(movie => movie.title === "Avengers");
console.log("Index of Avengers movie:", avengersIndex);




// Bank Transaction Analyzer

const transactions = [
    { id: 1, type: "credit", amount: 5000 },
    { id: 2, type: "debit", amount: 2000 },
    { id: 3, type: "credit", amount: 10000 },
    { id: 4, type: "debit", amount: 3000 }
];

const creditTransactions = transactions.filter(txn => txn.type === "credit");
console.log("Credit Transactions:", creditTransactions);

const creditAmounts = transactions.map(txn => txn.amount);
console.log("Credit Amounts:", creditAmounts);

const finalBalance = transactions.reduce((balance, txn) => {
    return txn.type === "credit" ? balance + txn.amount : balance - txn.amount;
}, 0);
console.log("Final Account Balance: ₹" + finalBalance);

const firstDebitTransaction = transactions.find(txn => txn.type === "debit");
console.log("First Debit Transaction:", firstDebitTransaction);

const transaction10000Index = transactions.findIndex(txn => txn.amount === 10000);
console.log("Index of transaction with amount 10000:", transaction10000Index);