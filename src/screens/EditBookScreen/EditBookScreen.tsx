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

    // getBookByISBN from API.ts
    const { id } = useParams<{ id: string }>();
    const effectiveId = id || 'defaultISBN'; // Use 'defaultISBN' if id is undefined
    const [book, setBook] = useState<Book | null>(null);
    const [error, setError] = useState<string | null>(null);

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

    // fill in the properties as text that is already in the form fields

    function handleSubmit() 
    {
        console.log("Submit");
        // Take the values from the form fields
        // update with UpdateBook from API.ts
        // onsubmit: user has to be directed to "/books/:id" with: useNavigate()
    }

    function handleClick2() {
        console.log("Cancel");
        navigate(`/books/${effectiveId}`);
    }

    return (
        <div>
            <h1>EditBookScreen</h1>
            <button onClick={handleClick2} className="button">Cancel</button>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" />
                </label>
                <label>
                    Author:
                    <input type="text" />
                </label>
                <label>
                    Publisher:
                    <input type="text" />
                </label>
                <label>
                    Price:
                    <input type="text" />
                </label>
                <label>
                    Number of Pages:
                    <input type="number" />
                </label>
                <button type="submit" className="button">Update</button>
            </form>
        </div>
    );
};
export default EditBookScreen;
    