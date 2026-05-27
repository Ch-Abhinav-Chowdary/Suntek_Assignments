# Routing Hands-On

## Overview
A React Router hands-on project demonstrating client-side routing and multi-page navigation. This application showcases how to build a single-page application (SPA) with multiple routes, nested components, and navigation between different pages.

## Project Structure
```
routing-handson/
├── src/
│   ├── components/
│   │   ├── RootLayout.jsx     # Main layout with nested routing
│   │   ├── Home.jsx           # Home page component
│   │   ├── ProductsList.jsx   # Products listing page
│   │   ├── Product.jsx        # Individual product details page
│   │   ├── ContactUS.jsx      # Contact page
│   │   ├── Header.jsx         # Navigation header
│   │   └── Footer.jsx         # Footer component
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
- **Multi-Page Navigation**: Navigate between Home, Products, Contact, and Product Details pages
- **React Router**: Client-side routing without page reloads
- **Nested Routes**: Child routes nested under RootLayout
- **Navigation Links**: Easy navigation through Header component
- **RootLayout**: Wrapper component with Header and Footer on all pages
- **Dynamic Routes**: Product details page with dynamic routing
- **Responsive Design**: Works on various screen sizes
- **SPA Architecture**: Single-page application experience

## Routes Structure
```
/                              - RootLayout (main wrapper)
├── (empty or /)              - Home page
├── /products                 - Products list page
├── /product                  - Product details page
└── /contact                  - Contact us page
```

## Technologies Used
- **React** - UI library
- **React Router** - Client-side routing library
- **Vite** - Build tool and development server
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

## Component Details

### App Component (App.jsx)
- Creates and configures the browser router
- Defines all routes and nested routes
- Uses `createBrowserRouter` from React Router v6
- Sets up RootLayout as the main route element
- Defines child routes for different pages

**Router Configuration:**
```
RootLayout (/)
  ├── Home (/home or /)
  ├── ProductsList (/products)
  ├── Product (/product)
  └── ContactUS (/contact)
```

### RootLayout Component
- Wrapper component for all pages
- Contains Header and Footer
- Uses `<Outlet />` to render child route components
- Ensures consistent layout across all pages
- Min height for proper footer positioning

### Home Component
- Landing page of the application
- Displays welcome message
- Introduction to the site
- Call-to-action buttons for navigation

### ProductsList Component
- Displays list/grid of all products
- Shows product cards with basic information
- Links to individual product details
- Navigation to product pages

### Product Component
- Shows detailed information about a single product
- Gets product ID from route parameters
- Displays product details (name, price, description, etc.)
- Navigation back to products list

### ContactUS Component
- Contact form or contact information page
- Email or contact form submission
- Business hours and location (if applicable)
- Contact methods display

### Header Component
- Navigation bar with links to all pages
- Logo or branding
- Active link highlighting (current page)
- Links:
  - Home
  - Products
  - Contact Us

### Footer Component
- Footer information
- Links and social media (optional)
- Copyright information
- Additional navigation links

## React Router Key Concepts

### createBrowserRouter
- Creates a router configuration
- Defines all routes and their components
- Supports nested routes

### RouterProvider
- Provides router to the entire application
- Wraps the application root

### Outlet
- Renders child route components
- Used in RootLayout to display page content
- Child components replace the Outlet based on current route

### Routes Structure
- Parent route: RootLayout (/)
- Child routes: Home, Products, Product, Contact
- Nested routes share the same layout (Header + Footer)

## Navigation Flow
1. **Home Page** - Landing page with navigation options
2. **Products Page** - Browse all products
3. **Product Details** - View specific product information
4. **Contact Page** - Get in touch with the business

## Customization
- Add more routes by extending the router configuration
- Modify navigation links in Header component
- Update styling in `App.css` or Tailwind classes
- Add route parameters for dynamic pages (e.g., `/product/:id`)
- Implement redirects and catch-all routes

## Build for Production
```bash
npm run build
```

## Learning Outcomes
This project demonstrates:
- Setting up React Router in a React application
- Creating nested routes
- Navigation between pages without full page reloads
- Component-based page structure
- Using Outlet for child route rendering
- Building a multi-page SPA
- Header and Footer layout patterns

## Advanced Features (To Implement)
- Route parameters and dynamic routing (e.g., `/product/:id`)
- Route guards/protected routes
- Query parameters for filtering/sorting
- Route transitions and animations
- Programmatic navigation using `useNavigate()`
- Navigation state and history
- Lazy loading routes with `React.lazy()`
- Error boundaries for route errors

## Future Enhancements
- Add product filtering on products page
- Implement form submission on contact page
- Add routing animations
- Create breadcrumb navigation
- Add 404 error page
- Implement authentication for protected routes
- Add route state management
- Create mobile hamburger menu for navigation
