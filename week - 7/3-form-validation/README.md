# User Signup Form with Validation

## Overview
A React-based user registration form with comprehensive form validation using react-hook-form. The application validates user input in real-time and displays submitted user data in a table format. It includes custom validation rules and error messages.

## Project Structure
```
3-form-validation/
├── src/
│   ├── components/
│   │   ├── Form.jsx         # Signup form with validation
│   │   └── Table.jsx        # (Optional) Submitted users table component
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application styles
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## Features
- **Form Validation**: Real-time validation using react-hook-form
- **Input Fields**:
  - First Name (4-6 characters required)
  - Last Name (4-6 characters required)
  - Email (valid email format required)
  - Date of Birth (date picker with custom validation)
- **Error Messages**: Specific error messages for each validation rule
- **Custom Validation**: DOB must be after 2020
- **Data Display**: Submitted user data displayed in a table
- **Form Reset**: Clear form after successful submission
- **Responsive Design**: Mobile-friendly interface

## Technologies Used
- **React** - UI library
- **Vite** - Build tool and development server
- **react-hook-form** - Form validation library
- **Tailwind CSS** - Utility-first CSS framework
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

## Validation Rules

### First Name
- **Required**: Yes
- **Min Length**: 4 characters
- **Max Length**: 6 characters
- **Error Messages**:
  - "First name is mandatory" - when empty
  - "minimum length is 4" - when less than 4 characters
  - "maximum length is 6" - when more than 6 characters

### Last Name
- **Required**: Yes
- **Min Length**: 4 characters
- **Max Length**: 6 characters
- **Error Messages**: Same as first name

### Email
- **Required**: Yes
- **Format**: Valid email format (checked by browser)
- **Error Message**: "Email is required"

### Date of Birth
- **Required**: Yes
- **Custom Validation**: Year must be greater than 2020
- **Error Messages**:
  - "Date of birth is required" - when empty
  - "Date must be after 2020" - when year is 2020 or earlier

## Component Details

### Form Component (Form.jsx)
- Uses `useForm` hook from react-hook-form for form management
- `register()` - Registers input fields
- `handleSubmit()` - Handles form submission with validation
- `setError()` - Manually sets custom error messages
- `formState.errors` - Accesses validation errors
- Uses `useState` to manage submitted user data
- Displays validation errors conditionally
- Shows submitted data in a table below the form

## Form Submission Workflow
1. User fills in the form fields
2. On submit, react-hook-form validates all fields
3. If validation fails, error messages display
4. If validation passes:
   - Data is added to user state array
   - User appears in the table
   - Form may be cleared (depending on implementation)

## Customization
- Modify validation rules in the `register()` options
- Change styling in `App.css` or Tailwind classes
- Add more fields to the form
- Implement backend submission instead of table display
- Add form reset functionality
- Persist data to localStorage or database

## Build for Production
```bash
npm run build
```

## Dependencies
- **react-hook-form**: For efficient form validation and state management
  - Reduces unnecessary re-renders
  - Provides built-in validation
  - Easy error handling

## Future Enhancements
- Add password and confirm password fields
- Implement backend API integration
- Add file upload capability
- Implement form submission to server
- Add user profile viewing/editing
- Add data export functionality (CSV/PDF)
- Implement form auto-save
- Add step-by-step form wizard
