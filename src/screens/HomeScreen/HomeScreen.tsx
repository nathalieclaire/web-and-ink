import React from 'react';
import './HomeScreen.css';
import BooksList from '../../components/BooksList/BooksList';
import { useBooks } from "../../domain/hook"

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
        <div className="button-container flex flex-c">
          <button onClick={refresh} className="button">Refresh Books</button> {/* Add a button to manually refresh the books */}
        </div>
        {content}
    </div>
  );
}

export default HomeScreen;