import React from "react";
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

  return (
    <div>
      <div className="addnote-container edit">
        <div className="title-container">
          <input
            type="text"
            value={note.title}
            className="add-title"
            onChange={setTitle}
            placeholder="Title"
          />
          <button>
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
          <button>EDIT NOTE</button>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
