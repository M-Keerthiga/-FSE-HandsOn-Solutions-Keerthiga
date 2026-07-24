import React from 'react';
import CourseItem from './CourseItem';

function CourseDetails(props) {
  return (
    <div>
      <h1>Course Details</h1>
      {props.courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseDetails;
