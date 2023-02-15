/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const CardContainer = () => {
  const [data, setData] = useState([
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ]);
  return <Card content={data} />;
};

const Card = ({ content }) => {
  return (
    <div className="bg-[#DFF8DB] flex items-center justify-center m-10 p-10 rounded-sm">
      {content.map((item) => {
        return (
          <div
            key={item.id}
            className="bg-white rounded-lg px-5 py-10 m-4 text-center"
          >
            <h2 className="text-2xl font-medium">{item.setup}</h2>
            <p className="text-lg">{item.punchline}</p>
          </div>
        );
      })}
    </div>
  );
};
export default CardContainer;
