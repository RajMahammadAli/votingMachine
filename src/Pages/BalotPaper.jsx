import { Link, useParams } from "react-router-dom";
import { users, candidate } from "../constant";
import { useState } from "react";

export default function () {
  const id = useParams();
  const newId = parseFloat(id.id);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [count, setCount] = useState(0);

  const categories = [
    "President",
    // "Assistant President",
    // "Secratary",
    // "Assistant Secretary",
  ];

  const candidateByPost = candidate.filter(
    (singleCandidate) => singleCandidate.post === categories[count]
  );
  // console.log(candidateByPost);

  const handleVote = (name) => {
    setIsButtonDisabled(true);
    const candidatebyId = candidate.find(
      (singleCandidateById) => singleCandidateById.id === name
    );
    // console.log(candidatebyId.numberOfVote);
  };

  const handleNext = () => {
    setCount(() => setCount(count + 1));
    setIsButtonDisabled(false);
  };

  return (
    <div className="w-full h-auto bg-slate-400">
      <div className="w-full h-full flex justify-center items-center p-12">
        <div className="w-full flex justify-between gap-4">
          <div className="w-1/3 h-[450px] p-4 flex flex-col justify-center items-center border mx-2 ">
            <h2 className="text-white font-bold text-3xl py-4">
              Voter Information
            </h2>
            <img
              className="w-[200px] my-2"
              src={users[parseFloat(newId) - 1]?.image}
            />
            <h3 className="text-xl font-bold">
              Name:{" "}
              <span className="text-white">
                {users[parseFloat(newId) - 1]?.name}
              </span>
            </h3>
            <h3>Designation: {users[parseFloat(newId) - 1]?.designation}</h3>
            <h3>Section: {users[parseFloat(newId) - 1]?.section}</h3>
          </div>
          <div className="w-2/3">
            <h2 className="text-white text-xl font-bold text-center">
              Please Select Your Candidate {count}
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
                    {candidateByPost.map((user, index) => (
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
                          <button
                            onClick={() => handleVote(user.id)}
                            className={
                              isButtonDisabled
                                ? "btn btn-disabled"
                                : "btn btn-success"
                            }
                          >
                            {isButtonDisabled ? "Already voted" : "Vote"}
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
                    <Link
                      to={count === categories.length - 1 ? "/thankYou" : ""}
                    >
                      Next
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
