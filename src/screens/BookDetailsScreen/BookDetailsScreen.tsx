import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookByISBN } from '../../domain/API';
import { Book } from '../../domain/book';
import { IoIosArrowBack } from "react-icons/io";

const BookDetailsScreen: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const effectiveId = id || 'defaultISBN'; // Use 'defaultISBN' if id is undefined
    const [book, setBook] = useState<Book | null>(null);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }

    const handleClick2 = () => {
        navigate(`/edit-book/${effectiveId}`);
    }

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const fetchedBook = await getBookByISBN(effectiveId);
                setBook(fetchedBook);
                setError(null);
            } catch (error) {
                console.error('Error fetching book:', error);
                setError('Error fetching book details. Please try again later.');
                setBook(null);
            }
        };

        if (id) {
            fetchBook();
        }
    }, [id]);

    if (!id) {
        return <div>No ID provided</div>;
    }

    return (
        <div>
            <button onClick={handleClick} className="button"><IoIosArrowBack /></button>
            <button onClick={handleClick2} className="button">Edit Book</button>
            {error && <p>{error}</p>}
            {book && (
                <div>
                    <h3>Title: {book.title}</h3>
                    <p>Subtitle: {book.subtitle}</p>
                    <p>ISBN: {book.isbn}</p>
                    <p>Abstract: {book.abstract}</p>
                    <p>Author: {book.author}</p>
                    <p>Publisher: {book.publisher}</p>
                    <p>Price: {book.price}</p>
                    <p>Number of Pages: {book.numPages}</p>
                    <img src={book.cover} alt="Book Cover" style={{ maxWidth: '150px' }} />
                </div>
            )}
        </div>
    );
};

export default BookDetailsScreen;
