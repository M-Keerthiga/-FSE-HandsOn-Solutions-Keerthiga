import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const { Name, School, total, goal } = props;
  const average = (total / goal).toFixed(2);

  return (
    <div className="formatstyle">
      <h1 style={{ color: 'brown' }}>Student Details:</h1>
      <div className="Name">
        <b><span>Name: </span></b>
        <span>{Name}</span>
      </div>
      <div className="School">
        <b><span>School: </span></b>
        <span>{School}</span>
      </div>
      <div className="Total">
        <b><span>Total: </span></b>
        <span>{total}</span>
        <span> Marks</span>
      </div>
      <div className="Score">
        <b><span>Average: </span></b>
        <span>{average}</span>
      </div>
    </div>
  );
}

export default CalculateScore;
