# Country Explorer

## Overview
A React-based web application for exploring and learning about countries around the world. Users can search for countries, view detailed information, and explore country-specific data with an interactive interface.

## Project Structure
```
country-explorer/
├── src/
│   ├── components/
│   │   ├── Home.jsx           # Welcome page component
│   │   ├── CountryList.jsx    # Countries list display component
│   │   ├── CountryCard.jsx    # Individual country card component
│   │   ├── SearchBar.jsx      # Search functionality component
│   │   ├── RootLayout.jsx     # Root layout with navigation
│   │   ├── Header.jsx         # Application header
│   │   ├── Footer.jsx         # Application footer
│   │   └── Example.jsx        # Example component
│   ├── App.jsx                # Main application component
│   ├── App.css                # Application styles
│   ├── index.css              # Global styles
│   └── main.jsx               # Application entry point
├── public/                    # Static assets
├── package.json               # Project dependencies
├── vite.config.js             # Vite configuration
└── README.md                  # This file
```

## Features
- **Country List Display**: Browse through a list of countries
- **Search Functionality**: Search and filter countries by name or other criteria
- **Country Cards**: Individual cards displaying country information
- **Detailed Country View**: View specific information about each country
- **Responsive Design**: Works seamlessly on mobile and desktop devices
- **Navigation**: Easy navigation between different pages
- **Header & Footer**: Consistent layout across all pages

## Technologies Used
- **React** - UI library
- **React Router** - Client-side routing (for navigation between pages)
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

### Home Component
- Welcome page with introduction to the application
- Navigation to main features
- Overview of available functionality

### CountryList Component
- Displays all available countries
- Shows country cards in a grid or list format
- Integrates with SearchBar for filtering

### CountryCard Component
- Displays individual country information
- Shows country flag, name, and key statistics
- Clickable to view detailed country information

### SearchBar Component
- Search input field for filtering countries
- Real-time search functionality
- Filters country list based on user input

### RootLayout Component
- Main layout wrapper for all pages
- Contains Header and Footer components
- Uses React Router's Outlet for nested routes

### Header & Footer Components
- Navigation bar with links
- Footer with additional information/links
- Consistent across all pages

## Data Integration
- Can be integrated with REST APIs (e.g., REST Countries API) to fetch real country data
- Currently uses static data or local data source
- Easy to swap data source from local to API-based

## Customization
- Modify styling in `App.css` or update Tailwind classes
- Add more country information fields
- Implement filtering by region, population, etc.
- Add sorting functionality
- Integrate with real country data API

## Build for Production
```bash
npm run build
```

## API Integration (Optional)
This project can be extended to use:
- **REST Countries API** - Free API for country information
- **World Bank API** - For economic and development data

## Future Enhancements
- Integrate with REST Countries API for real data
- Add country comparison feature
- Add filtering by continent/region
- Add sorting by population, area, etc.
- Display country flags and capitals
- Add information about government, languages, etc.
- Implement bookmarking/favorites functionality
- Add detailed country statistics and charts
- Multi-language support
