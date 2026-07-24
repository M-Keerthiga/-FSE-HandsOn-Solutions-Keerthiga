import React from 'react';
import './App.css';

function App() {
  const element = 'Office Space';
  const jsxatt = (
    <img
      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400"
      width="25%"
      height="25%"
      alt="Office Space"
    />
  );

  const ItemName = {
    Name: 'DBS',
    Rent: 50000,
    Address: 'Chennai'
  };

  const officeSpaces = [
    { Name: 'DBS', Rent: 50000, Address: 'Chennai' },
    { Name: 'WeWork', Rent: 75000, Address: 'Bangalore' },
    { Name: 'Regus', Rent: 45000, Address: 'Hyderabad' },
    { Name: 'SmartWorks', Rent: 82000, Address: 'Pune' }
  ];

  return (
    <div>
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}
      <h1>Name: {ItemName.Name}</h1>
      {(() => {
        let colors = [];
        if (ItemName.Rent <= 60000) {
          colors.push('textRed');
        } else {
          colors.push('textGreen');
        }
        return (
          <h3 className={colors.join(' ')}>
            Rent: Rs. {ItemName.Rent}
          </h3>
        );
      })()}
      <h3>Address: {ItemName.Address}</h3>

      <hr />
      <h2>More Office Spaces</h2>
      {officeSpaces.map((item, index) => {
        let colors = [];
        if (item.Rent <= 60000) {
          colors.push('textRed');
        } else {
          colors.push('textGreen');
        }
        return (
          <div key={index}>
            <h1>Name: {item.Name}</h1>
            <h3 className={colors.join(' ')}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
