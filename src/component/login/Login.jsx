import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../../constant";

export default function () {
  const navigate = useNavigate();

  const [userMobileNumber, setUserMobileNumber] = useState("");
  const [userSerialNumber, setUserSerialNumber] = useState("");

  const handleMobielChange = (e) => {
    setUserMobileNumber(e.target.value);
  };
  const handleSerialChange = (e) => {
    setUserSerialNumber(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userMobileNumber);
    console.log(userSerialNumber);
    const dbUser = users.find((user) => user.mobile === userMobileNumber);
    console.log(dbUser);
    if (
      dbUser?.mobile === userMobileNumber &&
      dbUser?.serialNumber === userSerialNumber
    ) {
      navigate(`/balotPaper/${dbUser?.id}`);
    } else {
      alert("Please input correct number");
    }
  };
  return (
    <>
      <div className="w-full h-screen bg-slate-400">
        <div className="w-full h-full flex justify-center items-center">
          <div className="border p-8 rounded-xl">
            <h1 className="my-8 text-center text-white text-4xl font-bold">
              Enter Your Mobile and Serial Number
            </h1>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col justify-center items-center gap-4"
            >
              <input
                type="text"
                name="mobileNumber"
                onChange={handleMobielChange}
                placeholder="Enter your mobile number"
                className="w-1/2 px-4 py-2 rounded-md outlined-none border-none focus:outline-none"
                required
              />
              <input
                type="text"
                name="serialNumber"
                onChange={handleSerialChange}
                placeholder="Enter your serial number"
                className="w-1/2 px-4 py-2 rounded-md outlined-none border-none focus:outline-none"
                required
              />
              <button
                type="submit"
                className="border px-6 py-2 rounded-lg bg-white text-slate-400 font-bold"
              >
                {" "}
                Submit{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
