import React from 'react';
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import './EditBookScreen.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Book } from '../../domain/book';
import { getBookByISBN, updateBook } from '../../domain/API';
import { IoIosArrowBack } from "react-icons/io";

export function EditBookScreen() {
        const { isbn: initialIsbn } = useParams<{ isbn: string }>();
        const navigate = useNavigate();
        const [book, setBook] = useState<Book | null>(null);
        const [error, setError] = useState<string | null>(null);

    // state variables for form inputs
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [isbn, setIsbn] = useState(initialIsbn || ''); // Updated to manage ISBN as a state
    const [abstract, setAbstract] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [price, setPrice] = useState('');
    const [numPages, setNumPages] = useState('');
 
    useEffect(() => {
        const fetchBook = async () => {
            try {
                if (!isbn) {
                console.error('ISBN is undefined');
                setError('ISBN is required.');
                // Clear form fields here if needed
                return;
                }
                const fetchedBook = await getBookByISBN(isbn);
                if (fetchedBook) {
                    setBook(fetchedBook);
                    // Set form fields with fetched book details
                    setTitle(fetchedBook.title || '');
                    setSubtitle(fetchedBook.subtitle || '');
                    setIsbn(fetchedBook.isbn || '');
                    setAbstract(fetchedBook.abstract || '');
                    setAuthor(fetchedBook.author || '');
                    setPublisher(fetchedBook.publisher || '');
                    setPrice(fetchedBook.price || '');
                    setNumPages(fetchedBook.numPages ? fetchedBook.numPages.toString() : '');
                    setError(null);
                } else {
                    // Handle case where book does not exist
                    setError('This book does not exist. Please check the ISBN and try again.');
                    // Optionally clear form fields here
                    setBook(null);
                }
            } catch (error) {
                console.error('Error fetching book:', error);
                setError('Error fetching book details. Please try again later.');
                setBook(null);
                // Optionally clear form fields here
            }
        };
    
        fetchBook();
    }, [isbn]); // Depend on isbn state to refetch when it changes

    if (!isbn) {
        return <div>No ISBN provided</div>;
    }

    if (!book) {
        return <div>Loading book details...</div>;
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Take the values from the form fields
    // update with UpdateBook from API.ts
    // onsubmit: user has to be directed to "/books/:isbn" with: useNavigate()

            event.preventDefault();
            // Prepare updated book object
            const updatedBook: Book = {
                ...book,
                title,
                subtitle,
                isbn,
                abstract,
                author,
                publisher,
                price,
                numPages: parseInt(numPages), // Convert numPages back to number
            };
    
            try {
                const updated = await updateBook(isbn, updatedBook); 
                if (updated) {
                    navigate(`/books/${isbn}`);
                } else {
                    console.error('Error updating book: Updated book is undefined.');
                    setError('Error updating book. Please try again.');
                }
            } catch (error) {
                console.error('Error updating book:', error);
                setError('Error updating book. Please try again.');
            }
        };
    

    function handleClickCancel() {
        console.log("Cancel");
        navigate(`/books/${isbn}`); // Navigate using the state-managed ISBN
    }

    return (
        <div className="editbook-details">
        <button onClick={handleClickCancel} className="button goback-button"><IoIosArrowBack /></button>
        <form className="editbook-form" onSubmit={handleSubmit}>
            <label className="blue-color bold-label2 editbook-title editbook-label">
                <span className="blue-color bold-label2 editbook-title">Title: </span>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label className="editbook-subtitle bold-label editbook-label">
                <span className="editbook-subtitle bold-label">Subtitle: </span>
                <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
            </label>
            <label className="editbook-label">
                <span className="bold-label">ISBN: </span>
                <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
            </label>
            <label className="editbook-label">
                <span className="bold-label">Abstract: </span>
                <textarea value={abstract} onChange={(e) => setAbstract(e.target.value)} />
            </label>
            <label className="editbook-label">
                <span className="bold-label">Author: </span>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </label>
            <label className="editbook-label">
                <span className="bold-label">Publisher: </span>
                <input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
            </label>
            <label className="editbook-label">
                <span className="bold-label">Price: </span>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <label className="editbook-label">
                <span className="bold-label">Number of Pages: </span>
                <input type="number" value={numPages} onChange={(e) => setNumPages(e.target.value)} />
            </label>
            <div className="bookitem-cover flex flex-c">
                <img src={book.cover} alt="Book Cover" style={{ maxWidth: '250px' }} 
                onError={(e) => (e.currentTarget.src = "/no_cover.png")}/>
            </div>
            <div className="update-button-container flex">
            <button type="submit" className="button">Update</button>
            </div>
        </form>
        {error && <p className="error">{error}</p>}
    </div>
    );
};
export default EditBookScreen;
    