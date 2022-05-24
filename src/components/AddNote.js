import React, { useState } from "react";
import "../styles/note.css";

const AddNote = ({ handleNewNoteText }) => {
  const [newNoteText, setNewNoteText] = useState("");
  // const [newNoteTitle, setNewNoteTitle] = useState("");

  const handleTextChange = (e) => {
    setNewNoteText(e.target.value);
  };
  // const handleTitleChange = (e) => {
  //   setNewNoteTitle(e.target.value);
  // };

  const handleSave = () => {
    // handleNewNoteTitle(newNoteTitle);
    if (newNoteText.trim().length > 0) {
      handleNewNoteText(newNoteText);
      setNewNoteText("");
    }
  };

  return (
    <div className="note">
      {/* <textarea
        placeholder="Title"
        rows="3"
        className="title"
        value={newNoteTitle}
        onChange={handleTitleChange}
      ></textarea> */}
      <textarea
        placeholder="Text"
        rows="10"
        value={newNoteText}
        onChange={handleTextChange}
      ></textarea>
      <button onClick={handleSave}> Save</button>
    </div>
  );
};

export default AddNote;
