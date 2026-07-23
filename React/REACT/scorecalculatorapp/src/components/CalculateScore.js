import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {

  const average = props.total / props.goal;

  return (
    <div className="box">
      <h2>Student Score Details</h2>

      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>School:</strong> {props.school}</p>
      <p><strong>Total Marks:</strong> {props.total}</p>
      <p><strong>Number of Subjects:</strong> {props.goal}</p>
      <p><strong>Average Score:</strong> {average}</p>
    </div>
  );
}

export default CalculateScore;