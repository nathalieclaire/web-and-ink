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

    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();
    const effectiveId = id || 'defaultISBN'; // Use 'defaultISBN' if id is undefined
    const [book, setBook] = useState<Book | null>(null);
    const [error, setError] = useState<string | null>(null);

    // state variables for form inputs
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [isbn, setIsbn] = useState('');
    const [abstract, setAbstract] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [price, setPrice] = useState('');
    const [numPages, setNumPages] = useState('');

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const fetchedBook = await getBookByISBN(effectiveId);
                setBook(fetchedBook);
                setError(null);
                // Initialize form fields with book data
                setTitle(fetchedBook.title);
                setSubtitle(fetchedBook.subtitle);
                setIsbn(fetchedBook.isbn);
                setAbstract(fetchedBook.abstract);
                setAuthor(fetchedBook.author);
                setPublisher(fetchedBook.publisher);
                setPrice(fetchedBook.price);
                setNumPages(fetchedBook.numPages.toString());
            } catch (error) {
                console.error('Error fetching book:', error);
                setError('Error fetching book details. Please try again later.');
                setBook(null);
            }
        };

        if (id) {
            fetchBook();
        }
    }, [id, effectiveId]);

    if (!id) {
        return <div>No ID provided</div>;
    }

    if (!book) {
        return <div>Loading...</div>;
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Take the values from the form fields
    // update with UpdateBook from API.ts
    // onsubmit: user has to be directed to "/books/:id" with: useNavigate()

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
                await updateBook(id, updatedBook); 
                navigate(`/books/${id}`); // Redirect to BookDetailsScreen after successful update
            } catch (error) {
                console.error('Error updating book:', error);
                setError('Error updating book. Please try again.');
            }
        };
    

    function handleClickCancel() {
        console.log("Cancel");
        navigate(`/books/${effectiveId}`);
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
    