import { useParams } from "react-router-dom";
import { users } from "../constant";
import { useState } from "react";

export default function () {
  const id = useParams();

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleVote = () => {
    setIsButtonDisabled(true);
  };
  const handleNext = () => {
    console.log("lets next");
  };

  return (
    <div className="w-full h-screen bg-slate-400">
      <div className="w-full h-full flex justify-center items-center">
        <div>
          <div>
            <h3>Name: {users[0].name}</h3>
            <h3>Designation: {users[0].designation}</h3>
            <h3>Section: {users[0].section}</h3>
          </div>
          <h2 className="text-white text-xl font-bold text-center">
            Please Select Your Candidate
          </h2>

          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={user.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">
                            United States
                          </div>
                        </div>
                      </td>
                      <td>Purple</td>
                      <th>
                        <button onClick={handleVote} className="btn btn-ghost ">
                          Select
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className={
                    isButtonDisabled
                      ? "bg-white text-[16px] text-black font-bold px-6 py-2 mt-2 rounded-lg cursor-pointer hover:bg-slate-500 duration-300 hover:text-white"
                      : "btn-disabled bg-white text-[16px] text-slate-300 font-bold px-6 py-2 mt-2 rounded-lg"
                  }
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
