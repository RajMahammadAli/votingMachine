import { Outlet } from "react-router-dom";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

export default function () {
  return (
    <>
      <div className="fixed w-full flex">
        <AdminNavbar />
      </div>
      <Outlet></Outlet>
    </>
  );
}
