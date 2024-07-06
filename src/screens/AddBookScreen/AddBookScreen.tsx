import { useNavigate } from "react-router-dom";
import "./AddBookScreen.css";
import { useState } from "react";
import { postNewBook } from "../../domain/API";
import { IoIosArrowBack } from "react-icons/io";

const AddBookScreen = () => {
  const navigate = useNavigate();

  // State variables to hold form data
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [abstract, setAbstract] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [price, setPrice] = useState("");
  const [numPages, setNumPages] = useState("");
  const [cover, setCover] = useState(""); // uploading cover is not implemented yet
  const [userId, setUserId] = useState("");

  // State variable for displaying error message
  const [error, setError] = useState<string | null>(null);

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newBook = {
      id,
      title,
      subtitle,
      isbn,
      abstract,
      author,
      publisher,
      price,
      numPages: parseInt(numPages),
      cover: "", // assuming cover is not required
      userId: parseInt(userId)
    };

    try {
      const createdBook = await postNewBook(newBook);
      navigate(`/books/${createdBook.isbn}`); // Navigate to BookDetailsScreen for the newly created book
    } catch (error) {
      console.error('Error creating book:', error);
      setError('Error creating book. Please try again.');
    }
  };

  // Function to handle cancel button click
  const handleCancel = () => {
    navigate("/"); // Navigate back to the home screen
  };

  return (
    <div className="addbook-details">
    <button onClick={handleCancel} className="button goback-button"><IoIosArrowBack /></button>
    <h1 className="blue-color bold-label2">Add Book</h1>
    <form onSubmit={handleSubmit} className="addbook-form">
      <label className="addbook-label">
        <span className="addbook-text bold-label">Title: </span>
        <input
          className="addbook-field"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label className="addbook-label">
        <span className="addbook-text  bold-label">Subtitle: </span>
        <input
          className="addbook-field"
          type="text"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
      </label>
      <label className="addbook-label">
        <span className="addbook-text  bold-label">ISBN: </span>
        <input
            className="addbook-field"
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            pattern="\d+"
            required
        />
      </label>
      <label className="addbook-label">
        <span className="addbook-text bold-label">Abstract: </span>
        <textarea
          className="addbook-field"
          value={abstract}
          onChange={(e) => setAbstract(e.target.value)}
        />
      </label>
      <label className="addbook-label">
        <span className="addbook-text bold-label">Author: </span>
        <input
          className="addbook-field"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <label className="addbook-label">
        <span className="addbook-text bold-label">Publisher: </span>
        <input
          className="addbook-field"
          type="text"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />
      </label>
      <label className="addbook-label">
        <span className="addbook-text bold-label">Price: </span>
        <input
          className="addbook-field"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label className="addbook-label">
        <span className="addbook-text bold-label">Number of Pages: </span>
        <input
          className="addbook-field"
          type="number"
          value={numPages}
          onChange={(e) => setNumPages(e.target.value)}
        />
      </label>
      <label className="addbook-label">
        <span className="addbook-text bold-label">User-ID: </span>
        <input
          className="addbook-field"
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </label>
      <div className="save-button-container flex">
      <button type="submit" className="button">
          Save
      </button>
    </div>
    </form>
    {error && <p className="error">{error}</p>}
  </div>
  );
};

export default AddBookScreen;