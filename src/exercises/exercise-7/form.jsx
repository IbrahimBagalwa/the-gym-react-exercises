import React, { useState } from "react";

const BuildForm = () => {
  const [person, setPerson] = useState({ fsname: "", lsname: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    if (person.fsname && person.lsname) {
      alert(`Hello ${person.fsname}-${person.lsname}`);
    } else {
      alert("All fields are required");
    }
  };
  return (
    <div className="flex flex-col items-center">
      <ul className="flex flex-row  text-blue-500 underline py-5">
        <li className="border-r-2 px-2  border-blue-500">Home</li>
        <li className="border-r-2 px-2 border-blue-500">Exercise 1</li>
        <li className="border-r-2 px-2 border-blue-500">Exercise 2 </li>
        <li className="border-r-2 px-2 border-blue-500">Exercise 3</li>
        <li className="border-r-2 px-2 border-blue-500">Exercise 4</li>
        <li className="border-r-2 px-2 border-blue-500">Exercise 5</li>
        <li className="border-r-2 px-2 border-blue-500">Exercise 6</li>
        <li className="border-r-2 px-2 border-blue-500">Exercise 7</li>
        <li className="border-r-2 px-2 border-blue-500">Exercise 8</li>
        <li className="px-2">Exercise 9</li>
      </ul>
      <div class="w-full max-w-xs lg:max-w-lg mt-10">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <input
            class="shadow mb-8 appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="fsname"
            value={person.fsname}
            onChange={handleChange}
            type="text"
            placeholder="First Name"
          />

          <input
            class="shadow mb-8 appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="lsname"
            value={person.lsname}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <div class="flex items-center justify-center">
            <button
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleSubmit}
            >
              GREET ME
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuildForm;
