import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteBook } from '../../domain/API';

type DeleteBookButtonProps = {
    isbn: string;
};

const DeleteBookButton: React.FC<DeleteBookButtonProps> = ({ isbn }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        const isDeleted = await deleteBook(isbn);
        if (isDeleted) {
            navigate('/');
        } else {
            console.error('Failed to delete the book.');
        }
    };

    return (
        <button onClick={handleDelete} className="button">
            Delete Book
        </button>
    );
};

export default DeleteBookButton;