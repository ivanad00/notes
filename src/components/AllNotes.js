import React, { useState } from "react";
import Note from "./Note";

const AllNotes = ({ notes, setNotes }) => {
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
        />
      ))}
    </div>
  );
};

export default AllNotes;
