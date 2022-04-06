import {Navigate} from "react-router-dom";
import Login from "../../pages/login/login";
import Welcome from "../../pages/welcome/welcome";
import Home from "../../pages/home/home";
import User from "../../pages/user/user";
import Role from "../../pages/role/role";
import Menu from "../../pages/menu/menu";
import Dictionary from "../../pages/dictionary/dictionary";
import Tenant from "../../pages/tenant/tenant";

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
                path: 'tenant',
                element: <Tenant />
            },
            {
                path: 'user',
                element: <User />
            },
            {
                path: 'role',
                element: <Role />
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'dictionary',
                element: <Dictionary />
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to={'/login'}/>
    }
]
