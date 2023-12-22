export default function () {
  const designations = [
    { value: "Selec Your designation" },
    { value: "Deputy Adminstrative Officer" },
    { value: "Deputy Assistant Adminstrative Officer" },
    { value: "Accountant" },
    { value: "Data entry control operator" },
    { value: "Record keeper" },
    { value: "Office Assistant cum-computer typist" },
    { value: "Process Server" },
    { value: "Desper Rider" },
  ];
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div>
          <div>
            <h1>Add users here</h1>
          </div>
          <div>
            <form>
              <input type="text" name="name" placeholder="Enter your name" />
              <input
                type="text"
                name="section"
                placeholder="Enter your section name"
              />
              <input type="text" name="photoUrl" placeholder="photo url" />
              <select>
                {designations.map((designation, index) => (
                  <option key={index}>{designation.value}</option>
                ))}
              </select>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
