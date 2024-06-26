import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../component/Pages/Home";
import Blogs from "../component/Blogs/Blogs";
import Blog from "../component/Pages/Blog/Blog";
import Bookmarks from "../component/Bookmarks/Bookmarks";
import Content from "../component/Content/Content";
import Author from "../component/Content/Author";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
                loader: () => fetch('https://dev.to/api/articles'),
            },

            {
                path: '/blog/:id',
                element: <Blog></Blog>,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                children: [
                    {
                        index: true,
                        element: <Content></Content>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                    },
                    {
                        path: 'author',
                        element: <Author></Author>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                    },
                ],
            },

            {
                path: '/bookmarks',
                element: <Bookmarks></Bookmarks>,
            },
        ],
    },


])