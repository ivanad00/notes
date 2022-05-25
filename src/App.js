import { useEffect, useState } from "react";
import "./App.css";
import AddNote from "./components/AddNote";
import AllNotes from "./components/AllNotes";
import OpenEdit from "./components/OpenEdit";

const App = () => {
  const [note, setNote] = useState({
    title: "",
    text: "",
    favorite: false,
  });

  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editNoteObj, setEditNoteObj] = useState({
    id: "",
    title: "",
    text: "",
    favorite: false,
  });

  const loadNotes = () => setNotes(JSON.parse(localStorage.getItem("save")));
  const storeNotesToDb = () =>
    localStorage.setItem("save", JSON.stringify(notes));
  useEffect(loadNotes, []);
  useEffect(storeNotesToDb, [notes]);

  const editNote = (noteid) => {
    notes.forEach((item) => {
      if (item.id === noteid) {
        setEditNoteObj({
          id: item.id,
          title: item.title,
          text: item.text,
          favorite: item.favorite,
        });
      }
    });
  };

  return (
    <div>
      <AddNote
        notes={notes}
        setNotes={setNotes}
        note={note}
        setNote={setNote}
      />
      <AllNotes
        notes={notes}
        setNotes={setNotes}
        showModal={showModal}
        setShowModal={setShowModal}
        editNote={editNote}
      />
      {showModal && (
        <OpenEdit
          notes={notes}
          setNotes={setNotes}
          note={editNoteObj}
          setNote={setEditNoteObj}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default App;
