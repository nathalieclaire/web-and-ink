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
exports.getAllBooks = void 0;
// Requesting all books
function getAllBooks() {
    return __awaiter(this, void 0, void 0, function () {
        var response, books, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:4730/books')];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP error! status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    books = _a.sent();
                    return [2 /*return*/, books];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error:', error_1);
                    return [2 /*return*/, Promise.reject('Error fetching books')];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getAllBooks = getAllBooks;
// Requesting one book by ISBN
function getBookByISBN(isbn) {
    return __awaiter(this, void 0, void 0, function () {
        var response, book, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:4730/books/".concat(isbn))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP error! status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    book = _a.sent();
                    return [2 /*return*/, book];
                case 3:
                    error_2 = _a.sent();
                    console.error('Error:', error_2);
                    return [2 /*return*/, {
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
                        }];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Posting a new book
function postNewBook(book) {
    return __awaiter(this, void 0, void 0, function () {
        var response, newBook, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:4730/books', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(book),
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP error! status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    newBook = _a.sent();
                    return [2 /*return*/, newBook];
                case 3:
                    error_3 = _a.sent();
                    console.error('Error:', error_3);
                    return [2 /*return*/, {
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
                        }];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Updating an existing book
function updateBook(isbn, updatedBook) {
    return __awaiter(this, void 0, void 0, function () {
        var response, book, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:4730/books/".concat(isbn), {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(updatedBook),
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP error! status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    book = _a.sent();
                    return [2 /*return*/, book];
                case 3:
                    error_4 = _a.sent();
                    console.error('Error:', error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Deleting a book
function deleteBook(isbn) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch("http://localhost:4730/books/".concat(isbn), {
                            method: 'DELETE',
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP error! status: ".concat(response.status));
                    }
                    return [2 /*return*/, response.ok];
                case 2:
                    error_5 = _a.sent();
                    console.error('Error:', error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
module.exports = { getAllBooks: getAllBooks, getBookByISBN: getBookByISBN, postNewBook: postNewBook, updateBook: updateBook, deleteBook: deleteBook };
