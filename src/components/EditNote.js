import React, { useEffect } from "react";
import close from "../assets/close.svg";

const EditNote = ({
  note,
  setNote,
  notes,
  setNotes,
  showModal,
  setShowModal,
}) => {
  const setTitle = (event) => setNote({ ...note, title: event.target.value });
  const setText = (event) => setNote({ ...note, text: event.target.value });
  const date = new Date();

  const addNoteToList = () => {
    if (note.title !== "" || note.text !== "") {
      setNotes(
        notes.map((item) => {
          if (item.id === note.id) {
            return {
              ...item,
              title: note.title,
              text: note.text,
              favorite: note.favorite,
              date: date.toLocaleString(),
            };
          } else return item;
        })
      );
      setNote({
        id: "",
        title: "",
        text: "",
        favorite: false,
      });
    }
    setShowModal(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape" && showModal) {
      setShowModal(false);
      addNoteToList();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div
      className="addnote-container edit"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="addnote-container edit">
        <div className="title-container">
          <input
            type="text"
            value={note.title}
            className="add-title"
            onChange={setTitle}
            placeholder="Title"
          />
          <button
            onClick={() => {
              setShowModal(false);
            }}
          >
            <img src={close} alt="close" />
          </button>
        </div>
        <textarea
          value={note.text}
          onChange={setText}
          className="addtext"
          placeholder="Enter a note..."
        ></textarea>

        <div className="note-controls">
          <button onClick={addNoteToList}>EDIT NOTE</button>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
