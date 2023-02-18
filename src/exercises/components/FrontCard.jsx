import React from "react";

const FrontCard = ({ avatar, last_name, first_name, employment }) => {
  return (
    <div className="">
      <img src={avatar} alt={last_name} />
      <div className="">
        <h2 className="text-xl font-medium">
          {first_name} {last_name}
        </h2>
        <p className="text-lg">{employment.title}</p>
      </div>
    </div>
  );
};

export default FrontCard;
