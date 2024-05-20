import React from 'react';
import { Book } from "../domain/book";

type BookItemProps = {
    book: Book;
};

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <div className="book-item">
        <h1>{book.title}</h1>
        <h2>{book.subtitle}</h2>
        <p>Author: {book.author}</p>
        <p>Publisher: {book.publisher}</p>
        <p>Price: {book.price}</p>
        <p>Number of Pages: {book.numPages}</p>
        <p>ISBN: {book.isbn}</p>
        <p>Abstract: {book.abstract}</p>
        <img src={book.cover} alt="Book Cover" />
    </div>
  );
};

export default BookItem;