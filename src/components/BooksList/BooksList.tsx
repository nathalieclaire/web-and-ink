import React from 'react';
import { Book } from "../../domain/book";
import BookItem from './../BookItem/BookItem'; // Import the BookItem component
import './BooksList.css';
import Pagination from './../Pagination/Pagination';

type BookItemProps = {
    books: Book[];
};

const BooksList: React.FC<BookItemProps> = ({ books }) => {

  // pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const [booksPerPage, setBooksPerPage] = React.useState(20);
  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentBooks = books.slice(firstBookIndex, lastBookIndex);

  return (
    <div className="books-list">
    <Pagination totalBooks={books.length} booksPerPage={booksPerPage} setCurrentPage={setCurrentPage} />
      <div className="bookslist-content grid">
        {currentBooks.map((book, index) => (
          <BookItem key={index} book={book} /> // Pass each book as a prop to BookItem
        ))}
      </div>
    </div>
  );
};

export default BooksList;