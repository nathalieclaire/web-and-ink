import React from 'react';
import { Book } from "../domain/book";
import BookItem from './BookItem'; // Import the BookItem component

type BookItemProps = {
    books: Book[];
};

const BooksList: React.FC<BookItemProps> = ({ books }) => {
  // Just display the first 20 items from the books array
  const first20Books = books.slice(0, 20);

  return (
    <div className="books-list">
      {first20Books.map((book, index) => (
        <BookItem key={index} book={book} /> // Pass each book as a prop to BookItem
      ))}
    </div>
  );
};

export default BooksList;