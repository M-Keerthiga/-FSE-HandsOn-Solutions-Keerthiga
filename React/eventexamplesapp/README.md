# eventexamplesapp — React Event Handling Lab

A hands-on React application demonstrating event handling concepts.

## Concepts Covered

### 1. React Events
React events are actions triggered by the user (clicks, key presses, form
submissions, mouse movement, etc.) that React listens for and responds to.
React uses a unified event system built on top of the browser's native
events, so handling events feels declarative and consistent across
browsers.

### 2. Event Handlers
An event handler is a function you write that runs in response to an
event. In React, you attach a handler by passing a function reference
(not calling it) to an event prop, e.g.:

```jsx
<button onClick={this.handleIncrement}>Increment</button>
```

Handlers can:
- Update component state (`setState`)
- Call other methods (chaining multiple actions from one click)
- Accept the event object or custom arguments
- Use `this` (in class components) to access the component instance

### 3. Synthetic Event
A **SyntheticEvent** is React's cross-browser wrapper around the
browser's native event object. It normalizes event behavior so your code
works the same in Chrome, Firefox, Safari, etc. It exposes the same
interface as native events (`preventDefault()`, `stopPropagation()`,
`target`, `type`, ...) and is passed automatically as the first argument
to every event handler.

```jsx
handlePress = (event) => {
  console.log(event.type);   // "click" — this is the SyntheticEvent
  alert('I was clicked');
};
```

### 4. React Event Naming Convention
- React event names use **camelCase**, not lowercase (e.g. `onClick`,
  not `onclick`).
- Event handler values are **function references** in `{}` (JSX
  expressions), not strings, e.g. `onClick={handleClick}` instead of
  `onclick="handleClick()"`.
- Common events: `onClick`, `onChange`, `onSubmit`, `onMouseOver`,
  `onKeyDown`, `onFocus`, `onBlur`.

## What This App Demonstrates

| # | Feature | Component | Concept |
|---|---------|-----------|---------|
| 1 | Increment / Decrement buttons | `Counter.js` | Multiple methods invoked from one handler; use of `this` |
| 2 | Say Welcome button | `WelcomeButton.js` | Passing arguments to an event handler |
| 3 | onPress click button | `SyntheticEventButton.js` | Synthetic event object |
| 4 | Currency Convertor | `CurrencyConvertor.js` | Handling `onChange` and `onSubmit`/Click, converting INR → EUR |

## Prerequisites

- Node.js (v16+ recommended)
- NPM
- Visual Studio Code (or any code editor)

## How to Run

1. Unzip the project.
2. Open a terminal in the `eventexamplesapp` folder.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. The app will open at `http://localhost:3000`.

## Project Structure

```
eventexamplesapp/
├── package.json
├── public/
│   └── index.html
└── src/
    ├── index.js
    ├── index.css
    ├── App.js
    └── components/
        ├── Counter.js
        ├── WelcomeButton.js
        ├── SyntheticEventButton.js
        └── CurrencyConvertor.js
```

## Notes

- The currency conversion rate used is a sample fixed rate
  (1 EUR = 90 INR) inside `CurrencyConvertor.js` — update
  `CONVERSION_RATE` as needed for accuracy.
- Estimated time to complete this lab: 90 minutes.
