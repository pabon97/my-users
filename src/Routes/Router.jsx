import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Components/Login";
import User from "../Components/User";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
        
    },
    {
        path: "/user",
        element: <User/>
    }
]);