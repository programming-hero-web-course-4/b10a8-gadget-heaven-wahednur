import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import { ProductProvider } from "./components/context/ProductContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </HelmetProvider>
    <ToastContainer position="top-center" />
    <Toaster />
  </StrictMode>
);
