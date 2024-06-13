import { createBrowserRouter } from "react-router-dom"; 
import ErrorScreen from "./screens/ErrorScreen/ErrorScreen";
import App from "./App";
import BooksScreen from "./screens/BooksScreen/BooksScreen";
import AboutScreen from "./screens/AboutScreen/AboutScreen";
import AddBookScreen from "./screens/AddBookScreen/AddBookScreen";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorScreen />,
    },
    {
        path: "/books",
        element: <BooksScreen />,
        errorElement: <ErrorScreen />,
    },
    {
        path: "/about",
        element: <AboutScreen />,
        errorElement: <ErrorScreen />,
    },
    {
        path: "/add-book",
        element: <AddBookScreen />, 
        errorElement: <ErrorScreen />,
    },
]);