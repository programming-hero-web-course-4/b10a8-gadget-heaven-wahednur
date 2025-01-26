import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Statistics from "../pages/Statistics/Statistics";
import Main from "../layout/Main";
import ProductDetails from "../components/products/productDetails/ProductDetails";
import Shop from "../pages/shop/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: () => fetch(`/products.json`),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: () => fetch(`/products.json`),
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);
