"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('./API'), getAllBooks = _a.getAllBooks, getBookByISBN = _a.getBookByISBN, postNewBook = _a.postNewBook, updateBook = _a.updateBook, deleteBook = _a.deleteBook;
// Requesting all books
function executeGetAllBooks() {
    return __awaiter(this, void 0, void 0, function () {
        var allBooks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAllBooks()];
                case 1:
                    allBooks = _a.sent();
                    console.log(allBooks);
                    return [2 /*return*/, allBooks];
            }
        });
    });
}
// Requesting one book by ISBN
function executeGetOneBook() {
    return __awaiter(this, void 0, void 0, function () {
        var book;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getBookByISBN("1001606140805")];
                case 1:
                    book = _a.sent();
                    console.log(book);
                    return [2 /*return*/, book];
            }
        });
    });
}
// Posting a new book
// disclaimer: Doesn't work when the Book with the ISBN is already in the database!!
function executePostOneBook() {
    return __awaiter(this, void 0, void 0, function () {
        var newBook, postedBook;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newBook = {
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
                    return [4 /*yield*/, postNewBook(newBook)];
                case 1:
                    postedBook = _a.sent();
                    console.log(postedBook);
                    return [2 /*return*/, postedBook];
            }
        });
    });
}
// Updating an existing book
function executeUpdateOneBook() {
    return __awaiter(this, void 0, void 0, function () {
        var updatedBook, updated;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updatedBook = {
                        id: '9781430257820',
                        title: 'Pro ASP.NET Web API Security',
                        subtitle: 'Securing ASP.NET Web API',
                        author: 'Badrinarayanan Lakshmiraghavan',
                        isbn: '9781430257820',
                        abstract: 'This is the updated abstract for the book!',
                        publisher: "Apress",
                        price: '$33.55',
                        numPages: 3926,
                        cover: '',
                        userId: 1,
                    };
                    return [4 /*yield*/, updateBook("9781430257820", updatedBook)];
                case 1:
                    updated = _a.sent();
                    console.log(updated);
                    return [2 /*return*/, updated];
            }
        });
    });
}
// Deleting a book
function executeDeleteOneBook() {
    return __awaiter(this, void 0, void 0, function () {
        var deleted;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deleteBook("12345678900")];
                case 1:
                    deleted = _a.sent();
                    console.log(deleted ? 'Deleted successfully' : 'Delete failed');
                    return [2 /*return*/, deleted];
            }
        });
    });
}
// Call the functions
// executeGetAllBooks();
// executeGetOneBook();
// executePostOneBook();
executeUpdateOneBook();
// executeDeleteOneBook();
