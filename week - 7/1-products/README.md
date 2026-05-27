# Product Showcase

## Overview
A React-based product showcase application that displays products in an organized grid layout. Users can browse through products with detailed information including images, brand names, descriptions, and prices.

## Project Structure
```
1-products/
├── src/
│   ├── components/
│   │   ├── Product.jsx      # Individual product card component
│   │   └── Products.jsx     # Products container/list component
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application styles
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## Features
- **Product Grid Display**: Shows multiple products in a responsive grid layout
- **Product Cards**: Each product displays:
  - Product image
  - Product name
  - Brand information
  - Product description
  - Price (in rupees ₹)
- **Component-based Architecture**: Uses reusable Product component for clean code
- **Tailwind CSS Styling**: Uses utility-first CSS framework for styling

## Technologies Used
- **React** - UI library
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

### Product Component (Product.jsx)
- **Props**: Accepts product data via props
  - `image` - Product image URL
  - `name` - Product name
  - `brand` - Brand name
  - `description` - Product description
  - `price` - Product price
- **Styling**: Styled with Tailwind CSS for a card-like appearance with yellow background

### Products Component (Products.jsx)
- Manages the product data
- Renders multiple Product components
- Handles product layout and grid display

## Customization
- Modify product data in `Products.jsx` to add/remove products
- Update styling in `App.css` or use Tailwind classes in components
- Change colors, sizes, and layout using Tailwind utility classes

## Build for Production
```bash
npm run build
```

## Notes
- This is a frontend-only application with no backend dependencies
- Products are currently static (hardcoded or imported from data)
- Can be easily extended to fetch products from an API
