# Dev Stack Builder

Dev Stack Builder is a responsive React website where users can explore different technologies and build their own development stack.

## Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Vite
- React Toastify
- JSON

## Features

- Users can explore different development technologies.
- Users can add and remove technologies from their stack.
- Users cannot add the same technology twice.
- Users can remove all selected technologies.
- Toast notifications are shown for different actions.
- The website is responsive for desktop, tablet, and mobile devices.

## React Questions & Answers

### 1. What is JSX?

**Answer:** JSX lets us write HTML-like code inside JavaScript.

### 2. Props vs State?

**Answer:** Props pass data to a component. State manages data inside a component.

### 3. What is `useState`?

**Answer:** `useState` manages changing data in a component.

### 4. What is `useEffect`?

**Answer:** `useEffect` runs code after rendering. I didn't use it because I imported the JSON directly.

### 5. Why use `key` in `.map()`?

**Answer:** It helps React identify each list item.

### 6. What is conditional rendering?

**Answer:** Showing UI based on a condition.

### 7. How do you pass data from parent to child?

**Answer:** A parent passes data using props. A child can communicate back using a function passed through props.

## Responsive Design

This website is responsive and works on:

- Desktop
- Tablet
- Mobile

## Notifications

React Toastify is used to show notifications when:

- A technology is added.
- A duplicate technology is added.
- A technology is removed.
- All technologies are removed.

## Author

Developed with React.js.