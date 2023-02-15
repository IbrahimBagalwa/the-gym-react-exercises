import React from "react";
import PropTypes from "prop-types";
const Button = ({ title, styles }) => {
  return (
    <button
      className={`rounded-2xl ring-1 px-2 mt-20 ${styles}`}
      onClick={() => alert(`You clicked on ${title}`)}
    >
      {title}
    </button>
  );
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.string,
};
Button.defaultProps = {
  title: "click me",
};
export default Button;
