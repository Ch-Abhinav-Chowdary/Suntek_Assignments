import { validateTitle, validatePriority, validateDueDate } from './validator.js'

/* 

 task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';
                    
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                    }


*/


// TODO: Import validator functions
const task = [];


function addTask(title, priority, dueDate) {
    // Validate using imported functions
    let titleResult = validateTitle(title);
    let priorityResult = validatePriority(priority);
    let dueDateResult = validateDueDate(dueDate);

    if(!titleResult.status) return `Error: ${titleResult.message}`;
    else if(!priorityResult) return `Invalid Property`;
    else if(!dueDateResult) return "Due date has already completed";

    // If valid, add to tasks array

    if(task.length == 0) {
        task.push({ id: 1, title: title, priority: priority, dueDate: dueDate, completed: false });
    } else {
        let lastTask = task[task.length - 1];
        task.push({ id: lastTask.id + 1, title: title, priority: priority, dueDate: dueDate, completed: false });
    }

    // Return success/error message
    return "Success";
}


// 2. Get all tasks

function getAllTasks() {
    // Return all tasks
    return task;
}


// 3. Mark task as complete

function completeTask(taskId) {
  // Find task and mark as complete
  if(task.length < taskId) {
    return "Invalid TaskId";
  }

  task.find(t => t.id === taskId+1).completed = true;
  return "Task has completed";
}

export { addTask, getAllTasks, completeTask }