import React from "react";
import EditNote from "./EditNote";

import '../styles/openEdit.css';

const OpenEdit = ({
  note,
  notes,
  setNote,
  setNotes,
  showModal,
  setShowModal,
}) => {
  return (
    <div className="edit-modal" onClick={() => setShowModal(false)}>
      <EditNote
        notes={notes}
        setNotes={setNotes}
        note={note}
        setNote={setNote}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default OpenEdit;
