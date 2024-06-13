import { createBrowserRouter } from "react-router-dom"; 
import ErrorScreen from "./screens/ErrorScreen/ErrorScreen";
import App from "./App";
import BooksScreen from "./screens/BooksScreen/BooksScreen";
import AboutScreen from "./screens/AboutScreen/AboutScreen";
import AddBookScreen from "./screens/AddBookScreen/AddBookScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorScreen />,             
        children: [
            {
                path: "/",
                element: <HomeScreen />,
            },
            {
                path: "books",
                element: <BooksScreen />,
            },
            {
                path: "about",
                element: <AboutScreen />,
            },
            {
                path: "add-book",
                element: <AddBookScreen />,
            },
        ],
    },
]);