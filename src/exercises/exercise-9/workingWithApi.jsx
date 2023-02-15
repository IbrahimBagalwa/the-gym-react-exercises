import React, { useEffect, useState } from "react";
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
        const { id, last_name, first_name, avatar, employment } = item;
        return (
          <>
            <div
              key={id}
              className="bg-white rounded-lg m-10 flex justify-center items-center flex-col"
            >
              <img src={avatar} alt={last_name} />
              <div className="">
                <h2 className="text-xl font-medium">
                  {first_name} {last_name}
                </h2>
                <p className="text-lg">{employment.title}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default WorkingWithApi;
