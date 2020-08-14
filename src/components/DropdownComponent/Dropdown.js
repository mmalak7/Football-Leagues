import React from "react";
import "./Dropdown.scss";

const Dropdown = (props) => {
  return <div className="dropdown-wrapper">{props.children}</div>;
};

export default Dropdown;
