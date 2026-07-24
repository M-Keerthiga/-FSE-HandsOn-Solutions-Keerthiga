import React from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

const books = [
  { id: 1, bname: 'Master React', price: 670 },
  { id: 2, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 3, bname: 'Mongo Essentials', price: 450 }
];

const blogs = [
  {
    id: 1,
    title: 'React Learning',
    author: 'Stephen Biz',
    content: 'Welcome to learning React!'
  },
  {
    id: 2,
    title: 'Installation',
    author: 'Schewzdenier',
    content: 'You can install React from npm.'
  }
];

const courses = [
  { id: 1, name: 'Angular', date: '4/5/2021' },
  { id: 2, name: 'React', date: '6/3/2021' }
];

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div className="App">
      {showCourses ? (
        <div className="column">
          <CourseDetails courses={courses} />
        </div>
      ) : null}

      {showBooks && (
        <div className="column">
          <BookDetails books={books} />
        </div>
      )}

      {showBlogs ? (
        <div className="column">
          <BlogDetails blogs={blogs} />
        </div>
      ) : (
        <div className="column">
          <p>Blogs hidden</p>
        </div>
      )}
    </div>
  );
}

export default App;
