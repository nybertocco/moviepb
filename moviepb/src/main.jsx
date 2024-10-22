import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Favoritos from "./pages/favoritos/Favoritos.jsx";
import NotFound from "./pages/notFound/notFound.jsx";
import Details from "./pages/detalhes/Details.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/pagemovie-PB/",
    element: <Home />,
  },
  {
    path: "/pagemovie-PB/favoritos",
    element: <Favoritos />,
  },
  {
    path: "/pagemovie-PB/detalhes/:id",
    element: <Details />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
