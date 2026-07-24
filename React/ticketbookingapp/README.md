# ticketbookingapp — Conditional Rendering Lab

A hands-on React application demonstrating conditional rendering.

## Concepts Covered

### 1. Conditional Rendering
Conditional rendering in React means showing different UI (elements or
components) depending on the application's state or props — similar to
`if`/`else` in JavaScript, but working with JSX. React re-evaluates
which elements to render every time state changes, so the UI stays in
sync automatically.

In this app, the top-level `App.js` decides whether to show the
`GuestPage` or the `UserPage` based on the `isLoggedIn` state:

```jsx
let page;
if (isLoggedIn) {
  page = <UserPage />;
} else {
  page = <GuestPage />;
}
```

### 2. Element Variables
An **element variable** is a normal JavaScript variable used to hold a
piece of JSX (a React element) that you build up conditionally and
render later. This lets you keep your `if`/`else` logic separate from
your `return` statement, improving readability.

Two examples in this app:
- `page` in `App.js` — holds either `<GuestPage />` or `<UserPage />`.
- `button` in `LoginControl.js` — holds either `<LoginButton />` or
  `<LogoutButton />` depending on login state.

```jsx
let button;
if (isLoggedIn) {
  button = <LogoutButton onClick={onLogoutClick} />;
} else {
  button = <LoginButton onClick={onLoginClick} />;
}
```

### 3. Preventing a Component From Rendering
Sometimes you want a component to render **nothing at all** based on a
condition. In React, a component's render function (or function
component body) can simply `return null;` instead of JSX. React will
mount the component but render no DOM output for it.

See `WarningBanner.js`:

```jsx
function WarningBanner(props) {
  if (!props.warn) {
    return null; // renders nothing
  }
  return <div className="warning-banner">...</div>;
}
```

The Guest page passes `warn={true}` (banner shows), while the User page
passes `warn={false}` (banner is prevented from rendering).

## App Behavior

- **Guest (not logged in):** Sees the "Login" button and the **Guest
  Page**, which displays flight details only (browsing) plus a warning
  banner prompting login.
- **Logged in:** Clicking **Login** switches to the **User Page**, which
  displays the same flight details plus a **Book Ticket** button. The
  warning banner is prevented from rendering here.
- **Logout:** Clicking **Logout** switches the state back, and the
  Guest Page is shown again.

## Project Structure

```
ticketbookingapp/
├── package.json
├── public/
│   └── index.html
└── src/
    ├── index.js
    ├── index.css
    ├── App.js
    └── components/
        ├── LoginControl.js
        ├── GuestPage.js
        ├── UserPage.js
        ├── FlightDetails.js
        └── WarningBanner.js
```

## Prerequisites

- Node.js (v16+ recommended)
- NPM
- Visual Studio Code (or any code editor)

## How to Run

1. Unzip the project.
2. Open a terminal in the `ticketbookingapp` folder.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. The app opens at `http://localhost:3000`.

## Notes

Estimated time to complete this lab: 60 minutes.
