# bloggerapp — Conditional Rendering & List Rendering Lab

A hands-on React application with three components — **Book Details**,
**Blog Details**, and **Course Details** — implemented using as many
different conditional-rendering techniques as possible.

## Concepts Covered

### 1. Various Ways of Conditional Rendering
This app deliberately uses a **different** technique in each place so
you can compare them side by side:

| Technique | Where it's used | Idea |
|---|---|---|
| `if` / `else` with an element variable | `BookDetails.js` | Assign JSX to a variable inside an `if/else`, then render the variable |
| Ternary operator (`cond ? a : b`) | `BlogDetails.js` | Inline choice between two outputs directly in JSX |
| Logical `&&` operator | `CourseDetails.js`, `BookItem.js` | Render something only if a condition is `true`; renders nothing if `false` |
| `switch` statement | `App.js` (`renderActiveSection`) | Choose among 3+ possible components — cleaner than nested if/else |
| IIFE (Immediately Invoked Function Expression) | `CourseItem.js` | Run more complex logic inline inside JSX |
| Preventing a component from rendering (`return null`) | `InfoBanner` in `CourseDetails.js` | A component can render nothing at all when a condition isn't met |

### 2. Rendering Multiple Components
`App.js` renders multiple components and swaps between them (Book /
Blog / Course Details) based on which tab button was clicked, using
`useState` to track `activeTab`. Each `Details` component itself also
renders **multiple** child components (one per list item).

### 3. List Component
A **list component** is a component whose job is to render a collection
of items — usually by transforming an array of data into an array of
React elements, one per item. `BookDetails`, `BlogDetails`, and
`CourseDetails` are all list components: each holds an array of data
and renders one child element (`BookItem`, `BlogItem`, `CourseItem`)
per entry.

### 4. Keys in React
A **key** is a special string/number prop you give to elements created
inside a list (usually via `map()`). Keys help React identify which
items changed, were added, or were removed between renders, so it can
update the DOM efficiently instead of re-rendering the whole list.

```jsx
{books.map((book) => (
  <BookItem key={book.id} book={book} />
))}
```

Rules of thumb:
- Keys must be **unique among siblings** (not necessarily globally unique).
- Prefer a stable ID from your data (`book.id`) over the array index.
- Keys are **not** passed down as a prop to the child component — they
  are used internally by React only.

### 5. Extracting Components With Keys
When list items get more complex, it's good practice to **extract** the
item markup into its own component and put the `key` on that extracted
component when it's created in the loop — not on an element inside it.

```jsx
// Correct: key goes on the element returned by map()
{blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)}
```

`BookItem.js`, `BlogItem.js`, and `CourseItem.js` are all examples of
components extracted this way.

### 6. React `map()` Function
`Array.prototype.map()` is the standard JavaScript function React
developers use to turn an array of data into an array of JSX elements.
It doesn't mutate the original array — it returns a brand-new array,
which JSX can render directly:

```jsx
courses.map((course) => <CourseItem key={course.id} course={course} />)
```

## Project Structure

```
bloggerapp/
├── package.json
├── public/
│   └── index.html
└── src/
    ├── index.js
    ├── index.css
    ├── App.js
    └── components/
        ├── BookDetails.js      (if/else + element variable)
        ├── BlogDetails.js      (ternary operator)
        ├── CourseDetails.js    (&& operator + prevented render)
        ├── BookItem.js         (extracted list item + && operator)
        ├── BlogItem.js         (extracted list item + ternary)
        └── CourseItem.js       (extracted list item + IIFE)
```

## Prerequisites

- Node.js (v16+ recommended)
- NPM
- Visual Studio Code (or any code editor)

## How to Run

1. Unzip the project.
2. Open a terminal in the `bloggerapp` folder.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. The app opens at `http://localhost:3000`. Use the tabs to switch
   between Book, Blog, and Course Details.

## Notes

Estimated time to complete this lab: 60 minutes.
