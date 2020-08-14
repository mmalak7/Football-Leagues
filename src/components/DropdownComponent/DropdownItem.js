import React from "react";

export default function DropdownItem(props) {
  return (
    <li className="dropdown-item">
      <a href="#" className="search-dropdown">
        {props.name}
      </a>
    </li>
  );
}
