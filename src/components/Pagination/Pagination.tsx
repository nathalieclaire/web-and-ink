import React from 'react';
import './Pagination.css'; 
import { Link, useLocation } from 'react-router-dom';

interface PaginationProps {
    totalBooks: number;
    booksPerPage: number;
    setCurrentPage: (page: number) => void;
}

function Pagination({ totalBooks, booksPerPage, setCurrentPage }: PaginationProps) {
    const pages = [];
    const location = useLocation();

    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className="App pagination-container flex flex-c">
            {
                pages.map((pageNumber, index) => {
                    const isActive = location.pathname === `/page/${pageNumber}`;
                    return (
                        <Link 
                            key={index} 
                            to={`/page/${pageNumber}`} 
                            className={`pagination-button ${isActive ? 'active2' : ''}`}
                            onClick={() => setCurrentPage(pageNumber)}
                        >
                            {pageNumber}
                        </Link>
                    );
                })
            }
        </div>
    );
}

export default Pagination;
