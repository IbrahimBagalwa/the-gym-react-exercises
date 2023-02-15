import React from "react";
import Button from "./component/Button";

const CustomComponent = () => {
  return (
    <div className="flex flex-col mx-auto items-center">
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
      <div className="flex">
        <Button title="Button 1" styles="mx-2" />
        <Button title="Button 2" styles="mx-2" />
        <Button title="Button 3" styles="mx-2" />
      </div>
    </div>
  );
};

export default CustomComponent;
