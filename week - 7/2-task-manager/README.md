# Task Manager

## Overview
A React-based task management application that allows users to create, track, and manage their daily tasks. Users can add new tasks, mark them as completed or pending, and organize their work efficiently.

## Project Structure
```
2-task-manager/
├── src/
│   ├── components/
│   │   ├── Form.jsx         # Task input form component
│   │   ├── TaskManager.jsx  # Main state management component
│   │   ├── TaskList.jsx     # Tasks list container component
│   │   └── TaskItem.jsx     # Individual task item component
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application styles
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## Features
- **Add Tasks**: Users can add new tasks through a form
- **Task List Display**: View all tasks in a list format
- **Toggle Completion Status**: Mark tasks as completed or pending by clicking on them
- **State Management**: Uses React hooks (useState) for state management
- **Responsive Design**: Mobile-friendly interface
- **Visual Feedback**: Completed tasks are visually distinguished from pending tasks

## Technologies Used
- **React** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework (used for styling)
- **JavaScript (ES6+)** - Programming language

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the provided local URL (typically `http://localhost:5173`)

## Component Details

### TaskManager Component (TaskManager.jsx)
- **Main State Container**: Manages all tasks state
- **Functions**:
  - `addTask(obj)` - Adds a new task to the tasks array
  - `updateStatus(id)` - Toggles the completed status of a task
- **Props Passed**: 
  - `addTask` to Form component
  - `tasks` and `updateStatus` to TaskList component

### Form Component (Form.jsx)
- Provides input field for adding new tasks
- Calls `addTask()` when form is submitted
- Handles form validation and user input

### TaskList Component (TaskList.jsx)
- Displays all tasks from the parent state
- Maps through tasks array
- Renders TaskItem components for each task

### TaskItem Component (TaskItem.jsx)
- Renders individual task
- Shows task details and completion status
- Calls `updateStatus()` when clicked to toggle completion

## User Workflow
1. User enters a task name in the form
2. Clicks "Add Task" or submit button
3. Task appears in the list below
4. User can click on a task to toggle its completion status
5. Completed tasks show visual distinction (e.g., strikethrough or different styling)

## Customization
- Modify styling in `App.css` or update Tailwind classes
- Add features like task deletion, editing, or priority levels
- Implement localStorage to persist tasks across page refreshes
- Add filters to show completed/pending/all tasks

## Build for Production
```bash
npm run build
```

## Future Enhancements
- Add task deletion functionality
- Add task editing capability
- Implement due dates for tasks
- Add priority levels
- Store tasks in localStorage or database
- Add categories or tags for organizing tasks
- Implement task filtering and sorting
