import React from 'react';
import './HomeScreen.css';
import BooksList from '../../components/BooksList/BooksList';
import { useBooks } from "../../domain/hook";
import AddBooksButton from '../../components/AddBooksButton/AddBooksButton';
import { HiOutlineRefresh } from "react-icons/hi";
import SearchForm from '../../components/SearchForm/SearchForm';

function HomeScreen() {

    const { books, state, error, refresh } = useBooks();

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
            content = <BooksList books={books} />;
            console.log("success");
            break;
        default:
            content = <p className="custom-content">Books are currently unavailable.</p>;
            break;
    }

  return (
    <div className="App">
        <div className="blue-bg flex flex-sb">
            <div>
                <SearchForm />
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