import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ lists }) => {
  return (
    <ul className="border border-gray-500">
      {lists.map((list, index) => {
        return (
          <li className="border-b border-gray-500 py-5 px-10" key={index}>
            {list === "dog" ? (
              <span>🐶 {list}</span>
            ) : list === "cat" ? (
              <span>🐱{list}</span>
            ) : list === "chicken" ? (
              <span>🐔 {list}</span>
            ) : list === "cow" ? (
              <span>🐮 {list}</span>
            ) : list === "sheep" ? (
              <span>🐑 {list}</span>
            ) : (
              <span>🐴 {list}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
};
ListItem.propTypes = {
  lists: PropTypes.array.isRequired,
};

export default ListItem;
