import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BooksList from './components/BooksList';
import { pawBook } from './domain/pawBook'; 

function App() {
  return (
    <div className="App">
        <Header />
        <BooksList books={pawBook} /> {/* Pass the book array as prop to BooksList */}
        <Footer />
    </div>
  );
}

export default App;
