import React, { useState } from 'react';
import FlightDetails from './FlightDetails';
import WarningBanner from './WarningBanner';

// The User (logged-in) page: the user can browse AND book tickets.
function UserPage() {
  const [bookingMessage, setBookingMessage] = useState('');

  function handleBookTicket() {
    setBookingMessage('Your ticket has been booked successfully!');
  }

  return (
    <div className="section">
      <h2>User Page - Book Tickets</h2>
      {/* warn={false} -> WarningBanner returns null, nothing is rendered */}
      <WarningBanner warn={false} />
      <FlightDetails />
      <button onClick={handleBookTicket}>Book Ticket</button>
      {bookingMessage && <p className="status">{bookingMessage}</p>}
    </div>
  );
}

export default UserPage;
