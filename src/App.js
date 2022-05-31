import { useEffect, useState } from "react";

import AddNote from "./components/AddNote";
import AllNotes from "./components/AllNotes";
import OpenEdit from "./components/OpenEdit";
import Search from "./components/Search";
import Header from "./components/Header";

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
  const [searchText, setSearchText] = useState("");
  const [color, setColor] = useState(false);

  const loadNotes = () => setNotes(JSON.parse(localStorage.getItem("save")));
  const storeNotes = () => {
    if (
      !localStorage.getItem("save") ||
      JSON.parse(localStorage.getItem("save")).length === 0
    ) {
      localStorage.setItem("save", JSON.stringify(notes));
    }
  };

  useEffect(loadNotes, []);
  useEffect(storeNotes, [notes]);

  const editNote = (noteId) => {
    notes.forEach((item) => {
      if (item.id === noteId) {
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
    <div className={`${color && "color"}`}>
      <Header handleColorChange={setColor} />
      <AddNote
        notes={notes}
        setNotes={setNotes}
        note={note}
        setNote={setNote}
      />
      <Search handleSearchNote={setSearchText} />
      <AllNotes
        notes={notes.filter((note) =>
          note.title.toLowerCase().includes(searchText)
        )}
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
