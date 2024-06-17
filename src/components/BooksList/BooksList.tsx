import React, { useEffect } from 'react';
import { Book } from "../../domain/book";
import BookItem from './../BookItem/BookItem';
import './BooksList.css';
import Pagination from './../Pagination/Pagination';

type BookItemProps = {
    books: Book[];
    passedPage: number;
    setCurrentPage: (page: number) => void;
};

const BooksList: React.FC<BookItemProps> = ({ books, passedPage, setCurrentPage }) => {
  const [booksPerPage, setBooksPerPage] = React.useState(20);

  useEffect(() => {
    setCurrentPage(passedPage);
  }, [passedPage, setCurrentPage]);

  const lastBookIndex = passedPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentBooks = books.slice(firstBookIndex, lastBookIndex);

  return (
    <div className="books-list">
      <Pagination 
        totalBooks={books.length} 
        booksPerPage={booksPerPage} 
        currentPage={passedPage} 
        setCurrentPage={setCurrentPage} 
      />
      <div className="bookslist-content grid">
        {currentBooks.map((book, index) => (
          <BookItem key={index} book={book} /> // Pass each book as a prop to BookItem
        ))}
      </div>
      <Pagination 
        totalBooks={books.length} 
        booksPerPage={booksPerPage} 
        currentPage={passedPage} 
        setCurrentPage={setCurrentPage} 
      />
    </div>
  );
};

export default BooksList;
