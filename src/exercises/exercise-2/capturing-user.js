const CapturingUser = () => {
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
      <button
        className="rounded-2xl ring-1 px-2 mt-20"
        onClick={() => alert("Clicked!")}
      >
        Click me
      </button>
    </div>
  );
};

export default CapturingUser;
