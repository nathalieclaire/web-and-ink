// LAB 03

const { getAllBooks, getBookByISBN, postNewBook, updateBook, deleteBook } = require('./API.js');

// Execute the functions using useful data
async function executeGetAllBooks() {
    // Requesting all books
    const allBooks = await getAllBooks();
    console.log(allBooks);
}

async function executeGetOneBook() {
    // Requesting one book by ISBN
    const book = await getBookByISBN('1001606140805');
    console.log(book);
}

async function executePostOneBook() {
    // Posting a new book
    const newBook = {
        id: '12345678900',
        title: 'Test Book',
        subtitle: 'The best book ever!',
        isbn: '12345678900',
        abstract: 'Hi, this is the abstract for the example book!',
        author: 'Nathalie Claire Huppert',
        publisher: 'HTW Berlin',
        price: '$38.99',
        numPages: 3926,
        cover: 'http://localhost:4730/covers/9781430232766.png',
        userId: 1,
    };
    const postedBook = await postNewBook(newBook);
    console.log(postedBook);
}

async function executeUpdateOneBook() {
    // Updating an existing book
    const updatedBook = {
        title: 'Updated Book',
        author: 'just Nathalie',
        isbn: '12345678900',
    };
    const updated = await updateBook('12345678900', updatedBook);
    console.log(updated);
}

async function executeDeleteOneBook() {
    // Deleting a book
    const deleted = await deleteBook('12345678900');
    console.log(deleted ? 'Deleted successfully' : 'Delete failed');
}

// Call the functions

// executeGetAllBooks();
executeGetOneBook();
// executePostOneBook();
// executeUpdateOneBook();
// executeDeleteOneBook();