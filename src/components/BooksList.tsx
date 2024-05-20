import React from 'react';
import { Book } from "../domain/book";
import BookItem from './BookItem'; // Import the BookItem component

type BookItemProps = {
    books: Book[];
};

const BooksList: React.FC<BookItemProps> = ({ books }) => {
  return (
    <div className="books-list">
      {books.map((book, index) => (
        <BookItem key={index} book={book} /> // Pass each book as a prop to BookItem
      ))}
    </div>
  );
};

export default BooksList;