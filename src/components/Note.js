import React from "react";
import "../styles/note.css";

const Note = ({ id, text, date }) => {
  return (
    <div className="note">
      <h1>Note {id}</h1>
      <div>{text}</div>

      <div>
        <div>{date}</div>
        <button>Edit</button>
        <button>Delete</button>
        <button>Favs</button>
      </div>
    </div>
  );
};

export default Note;
