import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteBook } from '../../domain/API';
import { useDispatch } from 'react-redux';

type DeleteBookButtonProps = {
    isbn: string;
};

const DeleteBookButton: React.FC<DeleteBookButtonProps> = ({ isbn }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            const isDeleted = await deleteBook(isbn);
            console.log('Delete book result:', isDeleted);
            if (isDeleted) {
                console.log('Book deleted successfully.');
                navigate('/');
            } else {
                console.error('Failed to delete the book.');
            }
        } catch (error) {
            console.error('Error during delete:', error);
        }
    };

    return (
        <button onClick={handleDelete} className="button">
            Delete Book
        </button>
    );
};

export default DeleteBookButton;