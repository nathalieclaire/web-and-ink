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
import { useSelector } from 'react-redux';
import { selectUserRole } from './state/user/userSlice';

function App() {
  // Get the user role from Redux
  const userRole = useSelector(selectUserRole);

  // Determine the theme class based if the user is admin
  const isAdmin = userRole === 'admin';
  
  return (
    <div className={`App ${isAdmin ? 'admin' : ''}`}>
        <Header />
        <Outlet />
        <Footer />
    </div>
  );
}

export default App;
