import React from 'react';
import './Pagination.css'; 
import { NavLink } from 'react-router-dom';

interface paginationProps {
    totalBooks: number;
    booksPerPage: number;
    setCurrentPage: (page: number) => void;
}

function Pagination({totalBooks, booksPerPage, setCurrentPage}: paginationProps) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalBooks/booksPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className="App pagination-container flex flex-c">
            {
                pages.map((pageNumber, index) => {
                    return (
                        <NavLink 
                            key={index} 
                            to={`/page/${pageNumber}`} 
                            className="pagination-button"
                            onClick={() => setCurrentPage(pageNumber)}
                        >
                            {pageNumber}
                        </NavLink>
                    );
                })
            }
        </div>
    );
}

export default Pagination;