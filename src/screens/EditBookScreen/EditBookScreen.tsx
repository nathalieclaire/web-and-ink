import React from 'react';
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import './EditBookScreen.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Book } from '../../domain/book';
import { getBookByISBN, updateBook } from '../../domain/API';

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
                await updateBook(isbn, updatedBook); 
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
        <div>
        <button onClick={handleClickCancel} className="button">Cancel</button>
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Subtitle:
                <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
            </label>
            <label>
                ISBN:
                <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
            </label>
            <label>
                Abstract:
                <input type="text" value={abstract} onChange={(e) => setAbstract(e.target.value)} />
            </label>
            <label>
                Author:
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </label>
            <label>
                Publisher:
                <input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
            </label>
            <label>
                Price:
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <label>
                Number of Pages:
                <input type="number" value={numPages} onChange={(e) => setNumPages(e.target.value)} />
            </label>
            <button type="submit" className="button">Update</button>
        </form>
        {error && <p className="error">{error}</p>}
    </div>
    );
};
export default EditBookScreen;
    