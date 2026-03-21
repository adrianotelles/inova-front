import { createBrowserRouter, redirect } from "react-router";
import { MainLayout } from "../pages/MainLayout";

const Router = createBrowserRouter([
    {
        path: '*',
        loader: () => redirect('/home')
    },
    {
        path: '',
        index: true,
        loader: () => redirect('/home')
    },
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: 'home',
                lazy: () => import('../pages/home/HomePage').then((c) => ({ Component: c.default }))
            },
            {
                path: 'produtos',
                lazy: () => import('../pages/product/ProductPage').then((c) => ({ Component: c.default }))
            },
            {
                path: 'sobre-nos',
                lazy: () => import('../pages/about/AboutPage').then((c) => ({ Component: c.default }))
            },
            {
                path: 'orcamento',
                lazy: () => import('../pages/budget/BudgetPage').then((c) => ({ Component: c.default }))
            }
        ],
    }
]);

export default Router