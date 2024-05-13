// LAB 03

// Requesting all books
async function getAllBooks() {
    try {
        const response = await fetch('http://localhost:4730/books');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const books = await response.json();
        return books;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Requesting one book by ISBN
async function getBookByISBN(isbn) {
    try {
        const response = await fetch(`http://localhost:4730/books/${isbn}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const book = await response.json();
        return book;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Posting a new book
async function postNewBook(book) {
    try {
        const response = await fetch('http://localhost:4730/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const newBook = await response.json();
        return newBook;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Updating an existing book
async function updateBook(isbn, updatedBook) {
    try {
        const response = await fetch(`http://localhost:4730/books/${isbn}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedBook),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const book = await response.json();
        return book;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Deleting a book
async function deleteBook(isbn) {
    try {
        const response = await fetch(`http://localhost:4730/books/${isbn}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.ok;
    } catch (error) {
        console.error('Error:', error);
    }
}

module.exports = { getAllBooks, getBookByISBN, postNewBook, updateBook, deleteBook };