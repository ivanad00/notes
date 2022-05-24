import React from "react";
import Note from "./Note";
import "../styles/note.css";
import AddNote from "../components/AddNote";

const allNotes = ({ notes, handleNewNoteText }) => {
  return (
    <div className="allNotesList">
      {notes.map((note, id) => (
        <Note key={id} id={id + 1} text={note.text} date={note.date} />
      ))}
      <AddNote
        // handleNewNoteTitle={handleNewNoteTitle}
        handleNewNoteText={handleNewNoteText}
      />
    </div>
  );
};

export default allNotes;
