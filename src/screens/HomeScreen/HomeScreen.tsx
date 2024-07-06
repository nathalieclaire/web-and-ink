import React from 'react';
import './HomeScreen.css';
import BooksList from '../../components/BooksList/BooksList';
import { useBooks } from "../../domain/hook";
import AddBooksButton from '../../components/AddBooksButton/AddBooksButton';
import { HiOutlineRefresh } from "react-icons/hi";
import SearchForm from '../../components/SearchForm/SearchForm';
import Pagination from '../../components/Pagination/Pagination';
import { useState } from 'react';

function HomeScreen() {

    const { books, state, error, refresh } = useBooks();
    const [currentPage, setCurrentPage] = useState(1); // Manage the current page state
    const [searchQuery, setSearchQuery] = useState(''); // Add search query state

    let content;

    switch (state) {
        case 'loading':
            content = <p className="custom-content">Loading books…</p>;
            console.log("loading");
            break;
        case 'error':
            content = <p className="custom-content">{error?.message}</p>;
            console.log("error", error?.message);
            break;
        case 'success':
            content = <BooksList books={books} passedPage={currentPage} setCurrentPage={setCurrentPage} searchQuery={searchQuery}/>;
            console.log("success");
            break;
        default:
            content = <p className="custom-content">Books are currently unavailable.</p>;
            break;
    }

  return (
    <div className="App">
        <div className="blue-bg flex flex-sb flex-c">
            <div className = "flex">
                <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
            <div className="button-container flex">
                <button onClick={refresh} className="button"><HiOutlineRefresh size = {20}/></button> {/* Add a button to manually refresh the books */}
                <AddBooksButton />
            </div>
        </div>
        {content}
    </div>
  );
}

export default HomeScreen;