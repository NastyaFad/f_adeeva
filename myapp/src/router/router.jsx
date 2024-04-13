import { createBrowserRouter } from "react-router-dom"
import Root from "../pages/Root"
import HomePage from "../pages/HomePage"

import ProductPage from "../pages/ProductPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/catalog/:id",
                element: <ProductPage />,
            },
            
        ]

    }
])

export default router