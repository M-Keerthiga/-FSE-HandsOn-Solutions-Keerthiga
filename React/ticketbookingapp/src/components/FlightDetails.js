import React from 'react';

// A simple presentational component listing available flights.
// Both the Guest page and the User page reuse this component,
// but only the User page additionally shows booking controls.
function FlightDetails() {
  const flights = [
    { id: 1, name: 'Air India AI-101', from: 'Chennai', to: 'Delhi', time: '06:30 AM', price: '₹5,499' },
    { id: 2, name: 'IndiGo 6E-202', from: 'Chennai', to: 'Mumbai', time: '09:15 AM', price: '₹4,299' },
    { id: 3, name: 'Vistara UK-303', from: 'Chennai', to: 'Bengaluru', time: '01:45 PM', price: '₹2,999' }
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Flight</th>
          <th>From</th>
          <th>To</th>
          <th>Departure</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {flights.map((flight) => (
          <tr key={flight.id}>
            <td>{flight.name}</td>
            <td>{flight.from}</td>
            <td>{flight.to}</td>
            <td>{flight.time}</td>
            <td>{flight.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FlightDetails;
