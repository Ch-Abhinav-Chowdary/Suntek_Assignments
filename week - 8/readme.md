# Week-8

This folder contains Week 8 React practice projects focused on state handling, hooks, and client-side routing.

## Tasks Performed

- `country-explorer/`
  - Created a small React practice app demonstrating `useState`, `useRef`, and `useEffect`.
  - Built a counter interface that tracks the current count and displays the previous count using a ref.
  - Organized UI components like `Header`, `Footer`, `SearchBar`, `CountryList`, and `CountryCard` for future country explorer features.
  - Practiced component structure and one-way data flow in React.

- `routing-handson/`
  - Built a routing demo using `react-router` with nested layout and navigation.
  - Implemented page routes for `Home`, `Products`, `Contact`, and `Product Details`.
  - Fetched product data from `https://fakestoreapi.com/products` and displayed it in a responsive product grid.
  - Added search and filter functionality to narrow product results by title or category.
  - Implemented client-side route navigation to a detail page using `useNavigate` and `useLocation` state.

## Concepts Covered

- React hooks: `useState`, `useEffect`, and `useRef`
- Component-based UI structure and reusable components
- React Router for single-page application navigation
- Nested routes with a shared `RootLayout` featuring header/footer layout
- Programmatic navigation with `useNavigate` and state transfer via `useLocation`
- Data fetching from a public REST API with `fetch`
- Loading and error handling states in React
- Form handling using `react-hook-form` for search/filter input
- Responsive layout with CSS classes and grid-based product cards
- Conditional rendering for loading and error UI

## App Summaries

### Country Explorer App (`country-explorer`)
- Functionality:
  - Displays a simple counter example with current count and previous count.
  - Demonstrates how to persist previous values using `useRef` without triggering re-renders.
- Implemented Features:
  - `useState` to store the current counter value.
  - `useRef` to capture the prior count value between renders.
  - `useEffect` to update the ref after every count change.
  - Baseline layout and components that can be extended into a full country explorer UI.

### Routing Hands-on App (`routing-handson`)
- Functionality:
  - Uses React Router to navigate between pages in a single-page app.
  - Fetches and displays products from an external API.
  - Supports search by product title or category.
  - Navigates to a detailed product view that shows selected product information.
- Implemented Features:
  - Nested route layout with `RootLayout`, `Header`, and `Footer`.
  - Active navigation styling using `NavLink`.
  - Product fetching with async `fetch`, loading indicator, and error handling.
  - Search/filter form with `react-hook-form`.
  - Route state passing to a details page using `useNavigate` and `useLocation`.

## How to Run

For each app, open a terminal and run:

```bash
cd "week - 8/country-explorer"
npm install
npm run dev
```

or

```bash
cd "week - 8/routing-handson"
npm install
npm run dev
```

## Notes

- `country-explorer` is currently a React hooks practice app; the component scaffold supports extending it into a full country browser.
- `routing-handson` is the main functional demo with routing, API fetching, search, and product details.
- Each project is a separate Vite React app with its own dependencies.
- If you want, I can also add a simple README table linking directly to each project and its main features.