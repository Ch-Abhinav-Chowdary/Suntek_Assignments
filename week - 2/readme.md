# week-2

This folder contains week 2 JavaScript practice work covering date handling, object copy behavior, collection operations, and modular app design.

## Tasks Completed

- `date_HandsOn.js`
  - Created and displayed the current date and time.
  - Extracted year, month, date, day of week, hours, minutes, and seconds from a `Date` object.
  - Formatted the date as `DD-MM-YYYY HH:mm:ss`.
  - Compared the current date against an enrollment deadline to determine whether enrollment is open or closed.
  - Validated a user input date string and detected invalid dates.
  - Calculated age in years from a date of birth.

- `shallow_copy.js`
  - Built a shallow copy of an object using the spread operator (`{ ...obj }`).
  - Changed primitive and nested object values in the copied object.
  - Observed how nested object mutation affects both the original and the shallow copy.
  - Created a deep copy using `structuredClone()`.
  - Modified the deep copy and verified the original object remained unchanged.

- `Collection_Module.js/` (collection engines)
  - `User_Processing_Engine.js`
    - Filtered active users.
    - Extracted names of active users.
    - Found admin users.
    - Found a user by ID.
    - Deactivated a user.
  - `course_catalog_engine.js`
    - Filtered published courses.
    - Sorted courses by price in descending order.
    - Extracted only the `title` and `price` fields.
    - Calculated the total value of published courses.
    - Added a new course.
  - `Shopping_cart_engine.js`
    - Merged cart items with course details.
    - Calculated total cart amount.
    - Increased course quantity.
    - Removed a course from the cart.
    - Checked whether all cart items were paid courses.
  - `RoleAndPermission_Engine.js`
    - Retrieved all role names.
    - Checked whether a student role can delete.
    - Produced a flat list of all unique permissions.
    - Added a new moderator role.
  - `master_Project_on_Collections.js`
    - Provided shared data for users, courses, cart items, and roles.

- `modules/`
  - Contains module-based app design examples for a task manager and an e-commerce shopping cart.
  - Demonstrates project structure using separate module files like `validator.js`, `task.js`, `product.js`, `cart.js`, and `discount.js`.
  - Covers the concepts of module import/export, validation logic, catalog operations, cart management, and discount/payment workflows.

## Concepts Covered

- Date handling and formatting (`Date`, `getFullYear()`, `getMonth()`, `getDate()`, `getDay()`, `getHours()`, `getMinutes()`, `getSeconds()`).
- Date comparison and validation using `new Date()` and `isNaN()`.
- Object copying and immutability:
  - Shallow copy with spread syntax (`{ ...obj }`).
  - Deep copy with `structuredClone()`.
- Array processing methods (`filter`, `map`, `reduce`, `find`, `findIndex`, `sort`, `every`).
- Object utilities (`Object.keys()`, `Object.values()`, `Set`, `flat()`).
- Module structure and reusable code using `import` / `export`.
- Conditional logic and branch handling.
- String formatting with `padStart()`.

## Definitions

- `new Date()`
  - Creates a new JavaScript `Date` object representing the current date and time or a specified date string.

- `getFullYear()`
  - Returns the four-digit year from a `Date` object.

- `getMonth()`
  - Returns the month index (0–11) from a `Date` object.

- `getDate()`
  - Returns the day of the month from a `Date` object.

- `getDay()`
  - Returns the day of the week as a number (0 = Sunday, 6 = Saturday).

- `getHours()`, `getMinutes()`, `getSeconds()`
  - Return the hour, minute, and second components from a `Date` object.

- `padStart(length, fill)`
  - Pads a string on the left until it reaches the specified length.

- `isNaN(value)`
  - Returns `true` if the value is `NaN` (not a valid number).

- Spread operator (`{ ...obj }`)
  - Creates a shallow copy of object properties.

- `structuredClone(value)`
  - Creates a deep copy of a value, including nested objects and arrays.

- `filter(callback)`
  - Creates a new array with elements that satisfy the callback condition.

- `map(callback)`
  - Creates a new array by applying the callback to each element.

- `reduce(callback, initialValue)`
  - Reduces an array to a single value by applying the callback to each element.

- `find(callback)`
  - Returns the first element in an array that satisfies the callback.

- `findIndex(callback)`
  - Returns the index of the first element that satisfies the callback, or `-1` if not found.

- `sort(compareFunction)`
  - Sorts an array in place according to the compare function.

- `every(callback)`
  - Returns `true` if all elements satisfy the callback condition.

- `Object.keys(obj)`
  - Returns an array of the object’s own property names.

- `Object.values(obj)`
  - Returns an array of the object’s own property values.

- `Set`
  - Creates a collection of unique values.

- `import` / `export`
  - Used to share code between JavaScript modules.

- `console.log()`
  - Writes output to the console for debugging or reporting results.

## Notes

This week emphasizes practical JavaScript date operations, copy behavior, collection handling, and module-based architecture.