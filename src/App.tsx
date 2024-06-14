import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import BooksList from './components/BooksList/BooksList';
import { pawBook } from './domain/pawBook'; 
import { Book } from './domain/book';
import { getAllBooks } from './domain/API';
import { useBooks } from './domain/hook';
import { Outlet } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
        <Header />
        <Nav />
        <Outlet />
        <Footer />
    </div>
  );
}

export default App;
