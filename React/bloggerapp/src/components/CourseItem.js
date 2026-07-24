import React from 'react';

function CourseItem({ course }) {
  return (
    <div>
      <h3>{course.name}</h3>
      <h4>{course.date}</h4>
    </div>
  );
}

export default CourseItem;
