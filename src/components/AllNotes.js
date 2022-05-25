import React, { useState } from "react";
import Note from "./Note";
import '../styles/all-notes.css'

const AllNotes = ({ notes, setNotes, showModal, setShowModal, editNote }) => {
  const [showAll, setShowAll] = useState(true);

  return (
    <div className="all-notes-container">
      {notes.map((item, number) => (
        <Note
          key={item.id}
          notes={notes}
          note={item}
          setNotes={setNotes}
          number={number + 1}
          showModal={showModal}
          setShowModal={setShowModal}
          editNote={editNote}
        />
      ))}
    </div>
  );
};

export default AllNotes;
