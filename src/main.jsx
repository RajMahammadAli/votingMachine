import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BalotPaper from "./Pages/BalotPaper.jsx";
import Login from "./component/login/Login.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "balotPaper/:id", element: <BalotPaper /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
