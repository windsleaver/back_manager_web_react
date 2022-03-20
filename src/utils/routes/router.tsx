import {Navigate} from "react-router-dom";
import Login from "../../pages/login/login";
import Welcome from "../../pages/welcome/welcome";
import Home from "../../pages/home/home";
import User from "../../pages/user/user";

export default [
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/welcome',
        element: <Welcome/>,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'user',
                element: <User />
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to={'/login'}/>
    }
]
