import React, { useEffect, useState } from 'react';
import { Book } from "../../domain/book";
import BookItem from './../BookItem/BookItem';
import './BooksList.css';
import Pagination from './../Pagination/Pagination';

type BookItemProps = {
    books: Book[];
    passedPage: number;
    setCurrentPage: (page: number) => void;
    searchQuery: string;
};

const BooksList: React.FC<BookItemProps> = ({ books, passedPage, setCurrentPage, searchQuery }) => {
  const [booksPerPage, setBooksPerPage] = React.useState(20);

  useEffect(() => {
    setCurrentPage(passedPage);
  }, [passedPage, setCurrentPage]);

  // Filter books based on the search query
  const filteredBooks = books.filter(book => {
    const normalizeString = (str: string) => str.replace(/\s+/g, '').toLowerCase();
    const normalizedQuery = normalizeString(searchQuery);
    return (
      normalizeString(book.title).includes(normalizedQuery) ||
      (book.subtitle && normalizeString(book.subtitle).includes(normalizedQuery)) ||
      (book.publisher && normalizeString(book.publisher).includes(normalizedQuery))
    );
  });
  console.log(filteredBooks);

  const lastBookIndex = passedPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentBooks = filteredBooks.slice(firstBookIndex, lastBookIndex);

  return (
    <div className="books-list">
      <Pagination 
        totalBooks={filteredBooks.length} 
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
        totalBooks={filteredBooks.length} 
        booksPerPage={booksPerPage} 
        currentPage={passedPage} 
        setCurrentPage={setCurrentPage} 
      />
    </div>
  );
};

export default BooksList;
