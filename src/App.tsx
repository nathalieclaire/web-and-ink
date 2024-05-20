import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { pawBook } from './domain/pawBook'; 

function App() {
  return (
    <div className="App">
        <Header />
        {pawBook.map((pawBook, index) => (
          <div key={index}>
          <h1>{pawBook.title}</h1>
          <h2>{pawBook.subtitle}</h2>
          <p>Author: {pawBook.author}</p>
          <p>Publisher: {pawBook.publisher}</p>
          <p>Price: {pawBook.price}</p>
          <p>Number of Pages: {pawBook.numPages}</p>
          <p>ISBN: {pawBook.isbn}</p>
          <p>Abstract: {pawBook.abstract}</p>
          <img src={pawBook.cover} alt="Book Cover" />
          </div>
        ))}
        <Footer />
    </div>
  );
}

export default App;
