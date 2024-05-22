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
        <h1>{book.title}</h1>
        <h2>{book.subtitle}</h2>
        <p>Author: {book.author}</p>
        <p>Publisher: {book.publisher}</p>
        <p>Price: {book.price}</p>
        <p>Number of Pages: {book.numPages}</p>
        <p>ISBN: {book.isbn}</p>
        <p>Abstract: {book.abstract}</p>
        <img src={book.cover} alt="Book Cover" />
        {/* Like counter section */}
        <div className = "like-container">
          <img src="/logo192.png" /* Use the absolut path from root here to prevent isssues! */
                alt="Like Button" 
                className='like-button'
                onClick={handleLike} 
            />
          <span className="like-button-text"> {likes} likes</span>
        </div>
    </div>
  );
};

export default BookItem;