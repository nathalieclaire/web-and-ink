import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BooksList from './components/BooksList/BooksList';
import { pawBook } from './domain/pawBook'; 
import { Book } from './domain/book';
import { getAllBooks } from './domain/API';
import { useBooks } from './domain/hook';
import { Outlet } from 'react-router-dom';

function App() {
  const { books, state, error, refresh } = useBooks();

  return (
    <div className="App">
        <Header />
        <Outlet />
        <Footer />
    </div>
  );
}

export default App;
