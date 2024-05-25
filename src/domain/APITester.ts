const { getAllBooks, getBookByISBN, postNewBook, updateBook, deleteBook } = require('./API');
import { Book } from './book';

// Requesting all books
async function executeGetAllBooks(): Promise<Book[]> {
    const allBooks: Book[] = await getAllBooks();
    console.log(allBooks);
    return allBooks;
}

// Requesting one book by ISBN
async function executeGetOneBook(): Promise<Book> {
    const book: Book = await getBookByISBN("1001606140805");
    console.log(book);
    return book;
}

// Posting a new book
// disclaimer: Doesn't work when the Book with the ISBN is already in the database!!
async function executePostOneBook(): Promise<Book> {
    const newBook = {
        id: "12345678900",
        title: 'Test Book',
        subtitle: 'The best book ever!',
        isbn: "12345678900",
        abstract: 'Hi, this is the abstract for the example book!',
        author: 'Nathalie Claire Huppert',
        publisher: 'HTW Berlin',
        price: '$38.99',
        numPages: 3926,
        cover: 'http://localhost:4730/covers/9781430232766.png',
        userId: 1,
    };
    const postedBook: Book = await postNewBook(newBook);
    console.log(postedBook);
    return postedBook;
}

// Updating an existing book
async function executeUpdateOneBook(): Promise<Book> {
    const updatedBook = {
        id: '12345678900',
        title: 'Updated Book',
        subtitle: 'Just updated the best book ever!',
        author: 'just Nathalie',
        isbn: '12345678900',
        abstract: 'Hi, this is the updated abstract for the example book!',
        publisher: 'HTW Berlin',
        price: '$38.99',
        numPages: 3926,
        cover: 'http://localhost:4730/covers/9781430232766.png',
        userId: 1,
    };
    const updated: Book = await updateBook("12345678900", updatedBook);
    console.log(updated);
    return updated;
}

// Deleting a book
async function executeDeleteOneBook(): Promise<Book> {
    const deleted: Book = await deleteBook("12345678900");
    console.log(deleted ? 'Deleted successfully' : 'Delete failed');
    return deleted;
}

// Call the functions

// executeGetAllBooks();
// executeGetOneBook();
// executePostOneBook();
// executeUpdateOneBook();
// executeDeleteOneBook();