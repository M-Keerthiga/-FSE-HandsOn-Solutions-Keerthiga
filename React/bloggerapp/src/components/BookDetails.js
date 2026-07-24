import React from 'react';
import BookItem from './BookItem';

function BookDetails(props) {
  const bookdet = (
    <ul>
      {props.books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </ul>
  );

  return (
    <div>
      <h1>Book Details</h1>
      {bookdet}
    </div>
  );
}

export default BookDetails;
