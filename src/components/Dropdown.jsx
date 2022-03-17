import React, { useState, useEffect } from "react";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.addEventListener(
      "click",
      function () {
        setOpen(false);
      },
      { capture: true }
    );
  }, []);

  const renderedOptions = props.options.map((option) => {
    if (option.value === props.selected.value) {
      return null;
    }

    return (
      <div
        onClick={() => props.onSelectedChange(option)}
        key={option.value}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label htmlFor="" className="label">
          Select a Color
        </label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{props.selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
