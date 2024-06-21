import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookByISBN } from '../../domain/API';
import { Book } from '../../domain/book';
import { IoIosArrowBack } from "react-icons/io";
import DeleteBookButton from '../../components/DeleteBookButton/DeleteBookButton';
import './BookDetailsScreen.css';

const BookDetailsScreen: React.FC = () => {
    const { isbn } = useParams<{ isbn: string }>();
    const effectiveIsbn = isbn || 'defaultISBN'; // Use 'defaultISBN' if isbn is undefined
    const [book, setBook] = useState<Book | null>(null);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }

    const handleClick2 = () => {
        navigate(`/edit-book/${isbn}`);
    }

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const fetchedBook = await getBookByISBN(isbn!);
                console.log(isbn);
                setBook(fetchedBook);
                setError(null);
            } catch (error) {
                console.error('Error fetching book:', error);
                setError('Error fetching book details. Please try again later.');
                setBook(null);
            }
        };

        if (isbn) {
            fetchBook();
        }
    }, [isbn]);

    if (!isbn) {
        return <div>No ISBN provided</div>;
    }

    if (!book) {
        return <div>Loading book details...</div>;
    }

    return (
        <div className="book-details">
            <button onClick={handleClick} className="button goback-button"><IoIosArrowBack /></button>
            {error && <p>{error}</p>}
            {book && (
                <div className="book-details-container">
                    <h1 className="blue-color bold-label2">Title: {book.title}</h1>
                    <h2 className="bold-label">Subtitle: {book.subtitle}</h2>
                    <p><span className="bold-label">ISBN: </span>{book.isbn}</p>
                    <p><span className="bold-label">Abstract: </span>{book.abstract}</p>
                    <p><span className="bold-label">Author: </span>{book.author}</p>
                    <p><span className="bold-label">Publisher: </span>{book.publisher}</p>
                    <p><span className="bold-label">Price: </span>{book.price}</p>
                    <p><span className="bold-label">Number of Pages: </span>{book.numPages}</p>
                    <div className="bookitem-cover flex flex-c">
                        <img src={book.cover} alt="Book Cover" style={{ maxWidth: '250px' }} 
                        onError={(e) => (e.currentTarget.src = "/no_cover.png")}/>
                    </div>
                </div>
            )}
            <div className="bookdetails-button-container flex">
                <button onClick={handleClick2} className="button">Edit Book</button>
                <DeleteBookButton isbn={book.isbn}/>
            </div>
        </div>
    );
};

export default BookDetailsScreen;
