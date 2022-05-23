import React from "react";
import Note from "./Note";
import "../styles/note.css";

const allNotes = () => {
  return (
    <div className="allNotesList">
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    
    </div>
  );
};

export default allNotes;
