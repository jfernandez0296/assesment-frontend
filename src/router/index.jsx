import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About,Home, ProductDetail } from "../pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <button>home</button>,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },


  {
    path: "/productdetail",
    element: <ProductDetail/>,
  },

]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };