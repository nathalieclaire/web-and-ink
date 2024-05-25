import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BooksList from './components/BooksList';
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
  }, [])

  return (
    <div className="App">
        <Header />
        <BooksList books={pawBook} /> {/* Pass the book array as prop to BooksList */}
        <Footer />
    </div>
  );
}

export default App;
