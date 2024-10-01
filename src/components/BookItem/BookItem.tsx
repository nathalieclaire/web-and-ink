import React, { useState } from "react";
import { Book } from "../../domain/book";
import "./BookItem.css";
import { NavLink } from "react-router-dom";
import { selectUserRole } from "../../state/user/userSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

type BookItemProps = {
  book: Book;
};

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  // get userRole from the redux store
  const userRole = useSelector((state: RootState) => selectUserRole(state));

  return (
    <div>
      <div className="book-item flex flex-column flex-sb">
        <div className="book-item-cover">
          <NavLink to={`/books/${book.id}`}>
            {book.cover ? (
              <img src={book.cover} alt="Book Cover" />
            ) : (
              <div className="no-cover">
                <img
                  src="/no_cover.png" /* Use the absolut path from root here to prevent isssues! */
                  alt="No Cover Available"
                />
              </div>
            )}
          </NavLink>
        </div>
        <div className="book-item-text-container">
          <div className="book-item-heading">
            <NavLink to={`/books/${book.id}`}>
              <h1>
                <span className="blue-color bold-label2">{book.title}</span>
              </h1>
            </NavLink>
            <NavLink to={`/books/${book.id}`}>
              <h2>{book.subtitle}</h2>
            </NavLink>
          </div>
          <div className="book-item-text">
            <p>
              <span className="bold-label">Publisher:</span> {book.publisher}
            </p>
            <p>
              <span className="bold-label">Price:</span> {book.price}
            </p>
            <p>
              <span className="bold-label">ISBN:</span> {book.isbn}
            </p>
          </div>
        </div>
        <div className="like-container">
          {userRole === "non-admin" ? (
            <img
              src={likes >= 1 ? "/like_icon_blue.png" : "/like_icon.png"} // Use the absolute path from root here to prevent issues!
              alt="Like Button"
              className="like-button"
              onClick={handleLike}
            />
          ) : (
            <img
              src={likes >= 1 ? "/like_icon_pink.png" : "/like_icon.png"}
              alt="Like Button"
              className="like-button"
              onClick={handleLike}
            />
          )}
          <span className="like-button-text"> {likes}</span>
          <span className="like-button-text2"> Likes </span>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
