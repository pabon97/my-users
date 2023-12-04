import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login";
import Main from "../Layout/Main";
import Error from "../Error/Error";
import Posts from "../Components/Posts";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
   {
    path: "/",
    element: <Main/>,
    errorElement: <Error/>,
    children: [
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/posts",
            element:(
                <PrivateRoute>
                     <Posts/>
                </PrivateRoute>
            )
        }
    ]
   }
]);