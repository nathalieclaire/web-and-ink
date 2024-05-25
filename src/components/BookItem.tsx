import React, { useState } from 'react';
import { Book } from "../domain/book";

type BookItemProps = {
    book: Book;
};

const BookItem: React.FC<BookItemProps> = ({ book }) => {

  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1); 
  }

  return (
    <div className="book-item">
      <div className="book-item-heading">
        <h1>{book.title}</h1>
        <h2>{book.subtitle}</h2>
      </div>
      <div className="book-item-text">
        <div className="book-item-info">
          <p>Author: {book.author}</p>
          <p>Publisher: {book.publisher}</p>
          <p>Price: {book.price}</p>
          <p>ISBN: {book.isbn}</p>
          <div className = "like-container">
            <img src="/logo192.png" /* Use the absolut path from root here to prevent isssues! */
              alt="Like Button" 
              className='like-button'
              onClick={handleLike} 
            />
            <span className="like-button-text"> {likes} likes</span>
          </div>
        </div>
        <div className="book-item-cover">
          <img src={book.cover} alt="Book Cover" />
        </div>
      </div>
    </div>
  );
};

export default BookItem;