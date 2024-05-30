import React from 'react';
import { Book } from "../../domain/book";
import BookItem from './../BookItem/BookItem'; // Import the BookItem component
import './BooksList.css';

type BookItemProps = {
    books: Book[];
};

const BooksList: React.FC<BookItemProps> = ({ books }) => {
  // Just display the first 20 items from the books array
  const first20Books = books.slice(0, 20);

  return (
    <div className="books-list">
      <div className="bookslist-content grid">
        {first20Books.map((book, index) => (
          <BookItem key={index} book={book} /> // Pass each book as a prop to BookItem
        ))}
      </div>
    </div>
  );
};

export default BooksList;