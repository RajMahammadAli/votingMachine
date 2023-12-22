import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gray-400">
        <div>
          <h1 className="text-4xl text-white font-bold">
            Thank You for voting.
          </h1>
          <div className="w-full flex justify-center my-4">
            <Link to="/" className="bg-white px-4 py-1 rounded-lg">
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
