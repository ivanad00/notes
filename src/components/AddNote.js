import React, { useState } from "react";
import favorite from "../assets/favorite.svg";
import favoritefull from "../assets/favorite-full.svg";
import "../styles/note.css";
import { v4 as uuidv4 } from "uuid";

const AddNote = ({ notes, setNotes, note, setNote }) => {
  const setTitle = (event) => setNote({ ...note, title: event.target.value });
  const setText = (event) => setNote({ ...note, text: event.target.value });

  const addNoteToList = () => {
    const date = new Date();
    if (note.title !== "" || note.text !== "") {
      setNotes([
        {
          id: uuidv4(),
          title: note.title,
          text: note.text,
          favorite: note.favorite,
          date: date.toLocaleString(),
        },
        ...notes,
      ]);
      setNote({
        title: "",
        text: "",
        favorite: false,
      });
    }
    console.log(notes);
  };

  return (
    <div className="addnote-container">
      <div className="title-container">
        <input
          type="text"
          value={note.title}
          className="add-title"
          onChange={setTitle}
          placeholder="Title"
        />
        <button>
          {note.favorite ? (
            <img className="icon" src={favoritefull} alt="favorite-fill" />
          ) : (
            <img className="icon" src={favorite} alt="favorite" />
          )}
        </button>
      </div>
      <textarea
        value={note.text}
        onChange={setText}
        className="add-text"
        placeholder="Enter a note..."
      ></textarea>

      <div className="note-controls">
        <button onClick={addNoteToList}>ADD NOTE</button>
      </div>
    </div>
  );
};

export default AddNote;
