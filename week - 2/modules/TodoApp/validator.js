/* 

i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        // Your code here
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        // Your code here
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        // Your code here
                      }

*/

//Validate task title (not empty, min 3 chars)
function validateTitle(title) {
    if (typeof title !== 'string' || title.trim().length < 3) {
        return { status: false, message: "The length of the string must be greater than 3" };
    } else {
        return { status: true };
    }
}


//Validate priority (must be: low, medium, high)
function validatePriority(priority) {
    let priorities = ["low", "medium", "high"];

    for(let i=0;i<priorities.length;i++) {
        if(priorities[i] == priority) {
            return true
        }
    }

    return false;
}


//Validate due date (must be future date)
function validateDueDate(date) {
    let currentDate = new Date();
    let dueDate = new Date(date);

    return dueDate > currentDate;
}

export { validateTitle, validatePriority, validateDueDate };