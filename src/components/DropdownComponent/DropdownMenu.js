import React, { useState } from "react";
import DropdownItem from "./DropdownItem";

export default function DropdownMenu(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <a href="#" className="dropdown-icon" onClick={() => setOpen(!open)}>
        {props.name}
      </a>
      {open && props.children}
    </div>
  );
}
