import React, { useEffect, useState } from "react";
import ReactCardFlip from "reactjs-flip-card";
import BackCard from "../components/BackCard";
import FrontCard from "../components/FrontCard";
const url = "https://random-data-api.com/api/users/random_user?size=10";
const WorkingWithApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
    setLoading(false);
  };
  const fetcRandom = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {loading || (
        <button
          className="bg-red-500 w-fit p-4 mt-10 rounded-lg font-medium text-lg"
          onClick={fetcRandom}
        >
          Fetch Random
        </button>
      )}
      {loading ? "Loading..." : <Card content={data} />}
    </div>
  );
};

const Card = ({ content }) => {
  return (
    <div className="bg-[#DFF8DB] grid grid-cols-3 items-center justify-between  m-10 p-10 rounded-sm">
      {content.map((item) => {
        return (
          <ReactCardFlip
            key={item.id}
            containerCss="bg-white rounded-lg m-6 px-2 flex justify-center items-center flex-col w-[300px] h-[380px]"
            frontComponent={<FrontCard {...item} />}
            backComponent={<BackCard />}
          />
        );
      })}
    </div>
  );
};
export default WorkingWithApi;
