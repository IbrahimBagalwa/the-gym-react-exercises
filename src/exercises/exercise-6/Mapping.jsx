import React from "react";
import ListItem from "../../components/listItem";

const Mapping = () => {
  const arr = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <div className="flex items-center justify-center mt-20">
      <ListItem lists={arr} />
    </div>
  );
};

export default Mapping;
