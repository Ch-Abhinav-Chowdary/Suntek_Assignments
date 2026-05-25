# Week-6

This folder contains front-end practice exercises for Week 6. Each `program` is a small static website demonstrating HTML and CSS techniques, layout patterns, and basic UI interactions.

## Tasks Performed

- `imgs/`
	- Organized image assets for consistent usage in all examples, including hero images, icons, and decorative graphics.
	- Demonstrated asset linking in HTML and background-image usage in CSS.

- `program 1/`
	- Built a static landing page using semantic HTML structure (`header`, `nav`, `section`, `main`, `footer`).
	- Used Flexbox to align navigation links, buttons, and hero content responsively.
	- Styled a hero section with a background image, headline, descriptive text, and call-to-action button.
	- Applied spacing, typography, and color styling to create a clean visual hierarchy.

- `program 2/`
	- Created a form page showing text inputs, email fields, radio buttons, checkboxes, and submit controls.
	- Used HTML5 validation attributes such as `required`, `type="email"`, and `pattern` for form validation.
	- Styled focused input states, error-like message hints, and button hover states for better UX.
	- Incorporated CSS variables for color palettes, spacing, and font sizes to keep styles maintainable.

- `program 3/`
	- Built a responsive card/grid layout using CSS Grid and media queries.
	- Added interactive hover transitions, subtle transform animations, and hover states for cards.
	- Organized content blocks with spacing, borders, and background colors for readability.
	- Demonstrated a responsive design that adjusts columns and content flow for smaller screens.

## Concepts Covered

- Semantic HTML elements (`header`, `nav`, `main`, `section`, `footer`) and document structure.
- Box model fundamentals: `margin`, `padding`, `border`, `width`, and `height`.
- CSS Layouts: Flexbox for row/column alignment and CSS Grid for multi-column responsive layouts.
- Responsive design using media queries and fluid units like `%` and `rem`.
- Form design and HTML5 validation with `required`, `type="email"`, and `pattern`.
- CSS variables (custom properties) for reusable theme values and easy design updates.
- CSS transitions, transforms, and simple animation timing for hover and focus effects.
- Accessibility basics: descriptive `alt` text, label association, and keyboard-friendly focus states.
- Asset management: organizing image files and referencing them correctly in HTML and CSS.
- Visual hierarchy: using typography, spacing, and color contrast to make content easier to scan.
- Component styling: cards, buttons, navigation, and input controls with consistent spacing.

## Definitions

- Semantic HTML: Using tags that convey meaning and structure to browsers and assistive tech.
- Flexbox: A one-dimensional layout model for aligning items in rows or columns.
- CSS Grid: A two-dimensional layout system for creating complex responsive layouts.
- Media Query: CSS rule that applies styles conditionally based on viewport size.
- CSS Variable: A custom property (e.g., `--main-color`) used to store reusable values.
- HTML5 Validation: Browser-native input validation using attributes like `required` and `pattern`.

## Contents

- `imgs/` — image assets
- `program 1/` — HTML and CSS for the first example (index.html, styles.css)
- `program 2/` — HTML and CSS for the form example (index.html, style.css)
- `program 3/` — HTML and CSS for the grid/gallery example (index.html, styles.css)

## How to View

1. Open the example HTML file in a browser directly by double-clicking `index.html` inside a program folder.

2. For a more accurate local preview, serve the folder with a local static server:

```bash
npx serve "Week - 6/program 1"
# or
npx http-server "Week - 6/program 1"
```

3. To review all demos quickly, open the `index.html` file for each program in the browser and compare layout behavior across different screen sizes.

## Notes

- These are static HTML/CSS examples with no JavaScript required.
- `program 1` focuses on page layout, navigation, and hero section styling.
- `program 2` focuses on form structure, validation, and user-friendly input styling.
- `program 3` focuses on responsive grid layout, card design, and hover interaction.
- The folder is designed for learning and review, with separate examples for layout, forms, and visual styling.
- A shared `imgs/` folder keeps assets organized and reusable across multiple HTML pages.
- If desired, I can also add a simple landing page that links to all three programs for easier navigation.
