import React from 'react';
import './Pagination.css'; 

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
        <div className="App pagination-container">
            {
            pages.map((page, index) => {
                return (
                    <button key={index} onClick={() => setCurrentPage(page)}className="button">{page}</button>
                );
            })
            }
        </div>
    );
}

export default Pagination;