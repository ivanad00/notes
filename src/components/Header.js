import React from "react";

import "../styles/header.css";

const Header = ({ handleColorChange }) => {
  return (
    <div className="header">
      <h1 className="title-notes-app">Notes app</h1>
      <button
        onClick={() =>
            handleColorChange((color) => !color)
        }
        className="save"
      >
        Color change
      </button>
    </div>
  );
};

export default Header;
