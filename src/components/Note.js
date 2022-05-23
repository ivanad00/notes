import React from "react";
import "../styles/note.css";

const Note = () => {
  return (
    <div className="note">
      <h1>Title</h1>
      <div>Text</div>

      <div>
        <div>Date</div>
        <button>Edit</button>
        <button>Delete</button>
        <button>Favs</button>
      </div>
    </div>
  );
};

export default Note;
