import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Components/Home/Home";
import ErrorPage from "../error-page";
import Root from "../Layouts/Root";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import News from "../Components/News/News";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/news.json'),
            },
            {
                path: "/news/:id",
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: () => fetch('/news.json'),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ],
    },
]);

export default router;