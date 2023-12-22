import { Link } from "react-router-dom";

export default function () {
  const navlinks = (
    <>
      <li>
        <Link to="/admin/addUsers">Add Users</Link>
      </li>
      <li>
        <Link to="/admin/addCandidates">Add Candidate</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="w-full bg-gray-400">
        <div className=" flex justify-center items-center w-full">
          <ul className="list-none flex gap-8 p-8 text-white font-bold text-xl">
            {navlinks}
          </ul>
        </div>
      </div>
    </>
  );
}
