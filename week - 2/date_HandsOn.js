/* 

Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss



Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid



Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years

*/


// Assignment 1: Date Creation & Extraction (Beginner)

let today = new Date();
console.log("Current Date & Time:", today);
let year = today.getFullYear();
let month = today.getMonth() + 1; // Months are zero-based
let date = today.getDate();
let dayOfWeek = today.getDay(); // 0 (Sun) to 6 (Sat)
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Date: ${date}`);
console.log(`Day of Week: ${dayOfWeek}`);
console.log(`Time: ${hours}:${minutes}:${seconds}`);

// Display in DD-MM-YYYY HH:mm:ss format

let formattedDate = `${String(date).padStart(2, '0')}-${String(month).padStart(2, '0')}-${year} ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

console.log("Formatted Date:", formattedDate);



// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)

let enrollmentDeadline = new Date("2026-01-20");
let currentDate = new Date();

if (currentDate < enrollmentDeadline) {
    console.log("Enrollment Open");
} else {
    console.log("Enrollment Closed");
}


let userInputDate = new Date('2026-02-30');

if (!isNaN(userInputDate)) {
    console.log("Invalid Date");
} else {
    console.log("Valid Date");
}

// Assignment 3: Age Calculator (Intermediate)

let dob = new Date("2000-05-15");

console.log((today.getFullYear() - dob.getFullYear()));