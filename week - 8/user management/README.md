# User Management System

## Overview
A React-based user management application that allows users to create, view, and manage user profiles. The application uses **local storage** for data persistence, eliminating the need for a backend server. Users can add new users, view user lists, and access individual user profiles with a clean, intuitive interface.

## Project Structure
```
user management/
├── src/
│   ├── components/
│   │   ├── RootLayout.jsx     # Main layout with navigation
│   │   ├── Home.jsx           # Home/dashboard page
│   │   ├── AddUser.jsx        # Form to create new users
│   │   ├── UserList.jsx       # Display list of all users
│   │   ├── User.jsx           # Individual user details page
│   │   ├── Header.jsx         # Navigation header
│   │   └── Footer.jsx         # Footer component
│   ├── services/
│   │   └── userService.js     # Local storage user management service
│   ├── data/
│   │   └── mockUsers.js       # Mock user data for initialization
│   ├── App.jsx                # Application with router configuration
│   ├── App.css                # Application styles
│   ├── index.css              # Global styles
│   └── main.jsx               # Application entry point
├── public/                    # Static assets
├── package.json               # Project dependencies
├── vite.config.js             # Vite configuration
└── README.md                  # This file
```

## Features
- **Add Users**: Create new user profiles with form validation
- **User List**: View all users in a card grid layout
- **User Details**: Click on a user to view full profile information
- **Local Storage**: All data persists in browser's localStorage
- **No Backend Required**: Fully functional without server connection
- **Mock Data**: Pre-loaded with sample users on first load
- **Navigation**: Easy navigation between pages via React Router
- **Responsive Design**: Mobile-friendly interface

## User Data Structure
Each user contains:
```javascript
{
  name: string,
  email: string,
  dateOfBirth: string (YYYY-MM-DD),
  mobileNumber: string
}
```

## Technologies Used
- **React** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Programming language
- **Browser LocalStorage API** - Data persistence

## Routes Structure
```
/                              - RootLayout (main wrapper)
├── /home                      - Home/dashboard page
├── /userslist                 - List all users
├── /adduser                   - Form to add new user
└── /user                      - Individual user details (via state)
```

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

### App Component (App.jsx)
- Configures React Router with all routes
- Uses `createBrowserRouter` for routing
- Sets up nested routes under RootLayout
- Routes:
  - `/home` - Home page
  - `/userslist` - Users list
  - `/adduser` - Add user form
  - `/user` - User details (receives state)

### RootLayout Component
- Main wrapper for all pages
- Contains Header and Footer
- Uses `<Outlet />` for nested route rendering
- Provides consistent layout across application

### Home Component
- Dashboard/welcome page
- Overview of application features
- Quick navigation to user features

### UserList Component
- Displays all users from localStorage
- Shows users in responsive card grid
- Each card shows user name and email
- Click on card to view full user details
- Uses `userService.getAllUsers()` to fetch data
- Navigates to `/user` with user data via state

### AddUser Component
- Form to create new users
- Form validation using react-hook-form
- Fields:
  - Name (required, text)
  - Email (required, email format)
  - Date of Birth (required, date picker)
  - Mobile Number (required, number)
- Uses `userService.createUser()` to save to localStorage
- Navigates to UserList on success
- Error handling and loading states

### User Component
- Displays individual user profile details
- Receives user data via React Router state
- Shows:
  - User name
  - Email address
  - Date of birth
  - Mobile number
- Back navigation to user list

### Header Component
- Navigation bar with links
- Links to Home, Users List, and Add User pages
- Logo/branding
- Responsive design

### Footer Component
- Footer information
- Copyright and additional links
- Consistent across all pages

## UserService (userService.js)
Local storage management service with methods:

### Methods:
```javascript
getAllUsers()           // Get all users from localStorage
createUser(newUser)     // Add new user to localStorage
getUserByEmail(email)   // Find user by email
deleteUser(email)       // Delete user from localStorage
updateUser(email, data) // Update user information
clearAll()              // Clear all users and reload mock data
initializeStorage()     // Initialize localStorage with mock data
```

### Features:
- Error handling for localStorage operations
- Returns `{success: boolean, user?: object, error?: string}`
- Automatic initialization with mock users
- Persistent storage across browser sessions

## Data Flow

### Adding User:
1. User fills form in AddUser component
2. Form validation occurs
3. On submit, `userService.createUser()` saves to localStorage
4. Navigate to UserList on success

### Viewing Users:
1. UserList component loads
2. `userService.getAllUsers()` retrieves data from localStorage
3. Users displayed in card grid
4. Click card to navigate to User details

### Viewing User Details:
1. Click user card from UserList
2. Navigate to `/user` with user data in state
3. User component displays profile information

## LocalStorage Details
- **Storage Key**: `"users"`
- **Initial Data**: mockUsers array from `data/mockUsers.js`
- **Persistence**: Data survives browser refresh
- **Clearing**: Open browser console and run:
  ```javascript
  localStorage.removeItem('users');
  location.reload();
  ```

## Customization
- Modify mock user data in `data/mockUsers.js`
- Update form fields in `AddUser.jsx`
- Change styling in `App.css` or Tailwind classes
- Add user deletion functionality
- Add user editing capability
- Implement sorting or filtering
- Add user search functionality

## Build for Production
```bash
npm run build
```

## Key Advantages of Local Storage Approach
✅ **No Backend Required** - Fully functional frontend-only application
✅ **Fast Development** - No API setup needed
✅ **Learning Tool** - Great for learning React Router and state management
✅ **Data Persistence** - Data survives browser refresh
✅ **Offline Support** - Works without internet connection
✅ **Easy Testing** - No dependency on external services

## Limitations
- Data is stored per browser (not synced across devices/browsers)
- LocalStorage has ~5-10MB size limit
- No data security (plaintext storage)
- Only suitable for development/learning (not production)

## Future Enhancements
- Migrate to backend API
- Add user editing functionality
- Implement user deletion
- Add search/filter functionality
- Add sorting by name, email, etc.
- Implement form validation improvements
- Add user profile picture upload
- Add user activity/login history
- Implement user roles and permissions
- Add data export functionality (CSV/JSON)
- Add backup and restore functionality

## Notes
- This application demonstrates local storage usage for educational purposes
- Ideal for learning React Router, component composition, and state management
- Can be easily converted to use a backend API
- Perfect starting point for building full-stack applications
