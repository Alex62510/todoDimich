import React, {ReactElement} from 'react';
import {Paths} from "../Path/Path";
import {BasketPage} from "../pages/basketPage/BasketPage";
import {LoginPage} from "../pages/loginPage/loginPage";
import {Shop} from "../pages/shop/Shop";
import {NotFound} from "../pages/notFound/notFound";
import {RegisterPage} from "../pages/registerPage/RegisterPage";

interface IRoutes {
    path: string,
    element: ReactElement
}

type RoutesType = IRoutes[]
export const routes: RoutesType = [
    {
        path: Paths.shop,
        element: <Shop/>
    },
    {
        path: Paths.basket,
        element: <BasketPage/>
    },
    {
        path: Paths.login,
        element: <LoginPage/>
    },
    {
        path: Paths.notFound,
        element: <NotFound />,
    },
    {
        path: Paths.singUp,
        element: <RegisterPage />,
    },
]
