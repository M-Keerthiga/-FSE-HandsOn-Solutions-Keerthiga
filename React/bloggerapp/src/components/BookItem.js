import React from 'react';

function BookItem({ book }) {
  return (
    <div>
      <h3>{book.bname}</h3>
      <h4>{book.price}</h4>
    </div>
  );
}

export default BookItem;
