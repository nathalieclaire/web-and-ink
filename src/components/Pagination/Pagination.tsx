import React from 'react';
import './Pagination.css';

type PaginationProps = {
    totalBooks: number;
    booksPerPage: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ totalBooks, booksPerPage, currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(totalBooks / booksPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="pagination-container flex flex-c">
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    className={`pagination-button ${currentPage === index + 1 ? 'active2' : ''}`}
                    onClick={() => handlePageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
