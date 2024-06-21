import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteBook } from '../../domain/API';

type DeleteBookButtonProps = {
    isbn: string;
};

// Bug: When "Delete Book" is clicked, the book is actually deleted from the list
// but isDeleted is still returning false and thus "Failed to delete the book."
const DeleteBookButton: React.FC<DeleteBookButtonProps> = ({ isbn }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        const isDeleted = await deleteBook(isbn);
        console.log(isDeleted);
        if (isDeleted) {
            console.log('Book deleted successfully.');
            navigate('/');
        } else {
            console.error('Failed to delete the book.');
        }
        // quick fix: redirect anyway beacause deleting the book technically works
        navigate('/');
    };

    return (
        <button onClick={handleDelete} className="button">
            Delete Book
        </button>
    );
};

export default DeleteBookButton;