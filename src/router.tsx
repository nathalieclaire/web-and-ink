import { createBrowserRouter } from "react-router-dom"; 
import ErrorScreen from "./screens/ErrorScreen/ErrorScreen";
import App from "./App";
import AboutScreen from "./screens/AboutScreen/AboutScreen";
import AddBookScreen from "./screens/AddBookScreen/AddBookScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LegalNoticeScreen from "./screens/LegalNoticeScreen/LegalNoticeScreen";
import BookDetailsScreen from "./screens/BookDetailsScreen/BookDetailsScreen";
import EditBookScreen from "./screens/EditBookScreen/EditBookScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import ThankYouScreen from "./screens/ThankYouScreen/ThankYouScreen";
import ShoppingCartScreen from "./screens/ShoppingCartScreen/ShoppingCartScreen";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorScreen />,             
        children: [
            {
                path: "/home",
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
            {
                path: "/",
                element: <LoginScreen />,
            },
            {
                path: "/thanks",
                element: <ThankYouScreen />,
            },
            {
                path: "/shopping-cart",
                element: <ShoppingCartScreen />,
            },
        ],
    },
]);