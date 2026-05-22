# Week - 1

This folder contains the week 1 JavaScript practice tasks, including billing, shopping cart operations, login logic, temperature analysis, and user profile management.

## Tasks Completed

- `Bill.js`
  - Calculated a bill total by adding amounts, applying a discount, and adding GST.
  - Used arithmetic operations and `console.log()` to display the final amount.

- `cart.js`
  - Built shopping cart summaries using array methods.
  - Filtered in-stock products.
  - Mapped products to name and total price objects.
  - Reduced product totals to grand total value.
  - Found the details of a specific product.
  - Found the index of a particular product.

- `login_system.js`
  - Created a smart login status engine using conditional logic.
  - Used `if`, `else if`, and `else` to choose the correct message.
  - Used a ternary operator for enrollment eligibility.

- `Temparature_Analysis.js`
  - Analyzed a temperature array with data processing methods.
  - Filtered temperatures above a threshold.
  - Converted Celsius values to Fahrenheit.
  - Calculated average temperature with reduce.
  - Found the first temperature above a limit.
  - Found the index of a specific temperature value.

- `User_Profile_manager.js`
  - Managed user profile object data.
  - Read and printed object properties.
  - Added and updated object fields.
  - Deleted an object field.
  - Used `Object.keys()` to list fields.
  - Used `for...in` loops to compute totals and find the highest value.
  - Used `Object.freeze()` to prevent further settings changes.

## Functions and Methods Used

- `filter(callback)`
  - Returns a new array with elements that satisfy the callback condition.

- `map(callback)`
  - Returns a new array with the result of calling the callback on each element.

- `reduce(callback, initialValue)`
  - Reduces an array to a single value by applying the callback to each element.

- `find(callback)`
  - Returns the first element that satisfies the callback condition.

- `findIndex(callback)`
  - Returns the index of the first element that satisfies the callback condition, or `-1` if none is found.

- `Object.keys(object)`
  - Returns an array of the object's own enumerable property names.

- `Object.freeze(object)`
  - Freezes an object so its properties cannot be modified, added, or removed.

- `console.log(...values)`
  - Prints values to the console for debugging and output.

- `delete object.property`
  - Removes a property from an object.

- `if`, `else if`, `else`
  - Used for branching logic based on conditions.

- Ternary operator: `condition ? valueIfTrue : valueIfFalse`
  - Used to choose one of two values based on a condition.

## Notes

This week focuses on array processing, conditional logic, object manipulation, and simple JavaScript data handling.