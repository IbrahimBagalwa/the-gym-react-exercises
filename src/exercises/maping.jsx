import React from "react";

const Mapping = () => {
  return (
    <ul className="flex flex-col m-10 text-6xl">
      {["dog", "cat", "chicken", "cow", "sheep", "horse"].map((list, index) => {
        return (
          <li className="py-5 mx-auto" key={index}>
            {list}
          </li>
        );
      })}
    </ul>
  );
};

export default Mapping;
