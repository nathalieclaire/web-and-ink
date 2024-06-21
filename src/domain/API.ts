import { Book } from './book';

// Requesting all books
async function getAllBooks(): Promise<Book[]> {
    try {
        const response = await fetch('http://localhost:4730/books');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const books: Book[] = await response.json();
        return books;
    } catch (error) {
        console.error('Error:', error);
        return Promise.reject('Error fetching books');
    }
}

// Requesting one book by ISBN
async function getBookByISBN(isbn: string): Promise<Book> {
    try {
        const response = await fetch(`http://localhost:4730/books/${isbn}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const book: Book = await response.json();
        return book;
    } catch (error) {
        console.error('Error:', error);
        return {
            id: "0",
            title: "This book does not exist!",
            subtitle: "Please check the ISBN and try again.",
            isbn: "0",
            abstract: "This book does not exist!",
            author: "Unknown",
            publisher: "Unknown",
            price: "$0",
            numPages: 0,
            cover: "https://via.placeholder.com/150",
            userId: 0
        };
    }
}

// Posting a new book
async function postNewBook(book: Book): Promise<Book> {
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
        const newBook: Book = await response.json();
        return newBook;
    } catch (error) {
        console.error('Error:', error);
        return {
            id: "0",
            title: "FAILED!",
            subtitle: "Uploading the new Book FAILED",
            isbn: "0",
            abstract: "Not cool!",
            author: "Unknown",
            publisher: "Unknown",
            price: "$0",
            numPages: 0,
            cover: "https://via.placeholder.com/150",
            userId: 0
        };
    }
}

// Updating an existing book
async function updateBook(isbn: string, updatedBook: Book, oldISBN: string): Promise<Book | undefined> {
    try {
        const response = await fetch(`http://localhost:4730/books`, {
            // used "POST" instead because "PUT" doesn't create a new route!!
            // I had the problem that when you clicked on the book the initial ISBN was still displayed in the route
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedBook),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const book: Book = await response.json();
        // bc we created a new route with POST he have to delete the old one!
        deleteBook(oldISBN);
        return book;

        // return book;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Deleting a book
async function deleteBook(isbn: string): Promise<boolean | undefined> {
    try {
        const response = await fetch(`http://localhost:4730/books/${isbn}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.ok;
    } catch (error) {
        console.error('Error:', error);
    }
}

export { getAllBooks, getBookByISBN, postNewBook, updateBook, deleteBook };