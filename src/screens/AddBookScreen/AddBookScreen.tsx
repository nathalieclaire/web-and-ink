import { useNavigate } from "react-router-dom";
import "./AddBookScreen.css";
import { useState } from "react";
import { postNewBook } from "../../domain/API";

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
      navigate(`/books/${createdBook.id}`); // Navigate to BookDetailsScreen for the newly created book
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
    <div>
    <h1>Add Book</h1>
    <form onSubmit={handleSubmit}>
    <label>
        ID:
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Subtitle:
        <input
          type="text"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
      </label>
      <label>
        ISBN:
        <input
          type="text"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          required
        />
      </label>
      <label>
        Abstract:
        <textarea
          value={abstract}
          onChange={(e) => setAbstract(e.target.value)}
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <label>
        Publisher:
        <input
          type="text"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        Number of Pages:
        <input
          type="number"
          value={numPages}
          onChange={(e) => setNumPages(e.target.value)}
        />
      </label>
      <label>
        User-ID:
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </label>
      <div>
        <button type="submit" className="button">
          Save
        </button>
        <button type="button" className="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
    {error && <p className="error">{error}</p>}
  </div>
  );
};

export default AddBookScreen;