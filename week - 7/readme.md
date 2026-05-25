# Week-7

This folder contains Week 7 React practice projects. Each subfolder is a separate Vite-powered React app demonstrating a different UI pattern: product display, task management, and form validation.

## Tasks Performed

- `1-products/`
  - Created a product showcase app with a reusable `Product` component.
  - Used static product data in `Products.jsx` to render a grid of product cards.
  - Displayed product details such as image, name, brand, description, and price.
  - Focused on component reuse, props passing, and layout styling.

- `2-task-manager/`
  - Built a task organizer app with a form to add new tasks.
  - Used React state (`useState`) to manage tasks in the app.
  - Implemented task creation using `react-hook-form` for input registration and validation.
  - Added a task list view with the ability to mark tasks complete.
  - Separated concerns into `Form`, `TaskList`, and `TaskItem` components.

- `3-form-validation/`
  - Created a user signup form with validation rules using `react-hook-form`.
  - Implemented required field validation, minimum and maximum length constraints, and email input validation.
  - Added custom validation logic for the date of birth field.
  - Stored submitted users in local component state and displayed them in a results table.

## Concepts Covered

- React component structure and composition
- JSX syntax and props passing
- `useState` for managing component state
- Modular component organization for reusable UI pieces
- `react-hook-form` for form handling, validation, and error display
- Conditional rendering based on form errors and task completion state
- Basic styling with CSS classes in Vite React apps
- Vite-powered React application setup and local dev server workflow
- Building UI with lists (`map`) and keyed child components
- Using form controls, radio buttons, checkboxes, and submit handling in React
- Displaying tabular data from state in a React component

## App Summaries

### Product Listing App (`1-products`)
- Functionality:
  - Displays a set of static products in a responsive grid layout.
  - Uses reusable components to render each product card.
  - Shows product image, name, brand, description, and price.
- Implemented Features:
  - Static product data mapping using `Array.map()`.
  - A reusable `Product` component with props for content and styling.
  - Visual layout using utility classes and Card-style styling.
  - Basic responsive spacing and alignment for a product gallery.

### Task Manager App (`2-task-manager`)
- Functionality:
  - Allows the user to create new tasks using a form.
  - Displays the current task list with priority and completion status.
  - Lets the user mark tasks as complete and update state.
- Implemented Features:
  - Task creation and form submission using `react-hook-form`.
  - Form validation for title and priority fields.
  - State management with `useState` to store an array of tasks.
  - Component decomposition into `Form`, `TaskList`, and `TaskItem`.
  - Conditional button rendering for incomplete tasks and status toggling.

### Form Validation App (`3-form-validation`)
- Functionality:
  - Provides a signup form that collects first name, last name, email, and date of birth.
  - Validates user input and displays error messages for invalid fields.
  - Adds valid submissions to a local state table for review.
- Implemented Features:
  - `react-hook-form` for field registration, validation, and error handling.
  - Built-in validation rules: required fields, minimum and maximum length, and email format.
  - Custom validation logic for the date of birth field with manual error setting.
  - Local state storage for submitted user records and rendering in a table.
  - Display of validation messages and dynamic feedback on invalid input.

## How to Run

For each app, open a terminal and run:

```bash
cd "week - 7/1-products"
npm install
npm run dev
```

Replace `1-products` with `2-task-manager` or `3-form-validation` to run the other apps.

## Notes

- Each project has its own `package.json` and dependency tree because they are separate Vite apps.
- These examples are suitable for learning React structure, state handling, and form workflows.
- If you want, I can also add a single root README link table with direct instructions for each app.