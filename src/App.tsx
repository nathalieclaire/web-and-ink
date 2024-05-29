import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BooksList from './components/BooksList/BooksList';
import { pawBook } from './domain/pawBook'; 
import { Book } from './domain/book';
import { getAllBooks } from './domain/API';

function App() {
  const [pawBook, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const fetchedBooks = await getAllBooks();
        setBooks(fetchedBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }

    fetchBooks();
  }, []);

  return (
    <div className="App">
        <Header />
        <div className="book-explorer">
          <BooksList books={pawBook} /> {/* Pass the book array as prop to BooksList */}
        </div>
        <Footer />
    </div>
  );
}

export default App;
