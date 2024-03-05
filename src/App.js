import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Errors";
import ProductDetailPage from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
