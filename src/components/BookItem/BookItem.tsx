import React, { useState } from 'react';
import { Book } from "../../domain/book";
import './BookItem.css';
import { NavLink } from 'react-router-dom';

type BookItemProps = {
    book: Book;
};

const BookItem: React.FC<BookItemProps> = ({ book }) => {

  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1); 
  }

  return (
    <div>
    <NavLink to={`/books/${book.id}`}>
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-cover">
          {book.cover ? (
            <img src={book.cover} alt="Book Cover" />
              ) : (
                <div className="no-cover">
                  <img src="/no_cover.png" /* Use the absolut path from root here to prevent isssues! */
                  alt="Like Button"
                  />
                </div>
              )}
      </div>
      <div className="book-item-text-container">
        <div className="book-item-heading">
          <h1><span className="blue-color bold-label2">{book.title}</span></h1>
          <h2>{book.subtitle}</h2>
        </div>
        <div className="book-item-text">
          <p><span className="bold-label">Publisher:</span> {book.publisher}</p>
          <p><span className="bold-label">Price:</span> {book.price}</p>
          <p><span className="bold-label">ISBN:</span> {book.isbn}</p>
        </div>
      </div>
      <div className = "like-container">
        <img src="/like_icon.png" /* Use the absolut path from root here to prevent isssues! */
            alt="Like Button" 
            className='like-button'
            onClick={handleLike} 
        />
        <span className="like-button-text"> {likes}</span>
        <span className="like-button-text2"> Likes </span>
      </div>
    </div>
    </ NavLink>
    </div>
  );
};

export default BookItem;