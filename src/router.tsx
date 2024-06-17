import { createBrowserRouter } from "react-router-dom"; 
import ErrorScreen from "./screens/ErrorScreen/ErrorScreen";
import App from "./App";
import AboutScreen from "./screens/AboutScreen/AboutScreen";
import AddBookScreen from "./screens/AddBookScreen/AddBookScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LegalNoticeScreen from "./screens/LegalNoticeScreen/LegalNoticeScreen";
import BookDetailsScreen from "./screens/BookDetailsScreen/BookDetailsScreen";
import EditBookScreen from "./screens/EditBookScreen/EditBookScreen";

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
                path: "about",
                element: <AboutScreen />,
            },
            {
                path: "add-book",
                element: <AddBookScreen />,
            },
            {
                path: "legal-notice",
                element: <LegalNoticeScreen />,
            },
            {
                path: "/books/:isbn",
                element: <BookDetailsScreen />,
            },
            {
                path: "/edit-book/:isbn",
                element: <EditBookScreen />,
            },
        ],
    },
]);