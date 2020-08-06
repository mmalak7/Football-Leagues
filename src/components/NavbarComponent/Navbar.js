import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import "./Navbar.scss";

export default function Navbar() {
  const [state, setState] = useState({ checked: true });

  const handleChange = (event) => {
    setState({ [event.target.name]: event.target.checked });
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar navbar-items">
        <div className="navbar navbar-item logo">Football Leagues</div>
        <div className="navbar navbar-item mode">
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={state.checked}
                  onChange={handleChange}
                  name="checked"
                />
              }
              label="Dark Mode"
            />
          </FormGroup>
        </div>
      </div>
    </div>
  );
}
