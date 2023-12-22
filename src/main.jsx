import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BalotPaper from "./Pages/BalotPaper.jsx";
import Login from "./component/login/Login.jsx";
import ThankYou from "./Pages/ThankYou/ThankYou.jsx";
import Admin from "./Pages/Admin/Admin.jsx";
import AddUsers from "./Pages/AddUsers/AddUsers.jsx";
import AddCandidates from "./Pages/AddCandidates/AddCandidates.jsx";
import AdminHome from "./Pages/AdminHome/AdminHome.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "balotPaper/:id", element: <BalotPaper /> },
  { path: "thankYou", element: <ThankYou /> },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      { path: "admin", element: <AdminHome /> },
      { path: "addUsers", element: <AddUsers /> },
      { path: "addCandidates", element: <AddCandidates /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
