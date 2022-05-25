import { useEffect, useState } from "react";
import "./App.css";
import AddNote from "./components/AddNote";
import AllNotes from "./components/AllNotes";

const App = () => {
  const [note, setNote] = useState({
    title: "",
    text: "",
    favorite: false,
  });

  const [notes, setNotes] = useState([]);
  
  const loadNotes = () => setNotes(JSON.parse(localStorage.getItem("save")));
  const storeNotesToDb = () =>
    localStorage.setItem("save", JSON.stringify(notes));
  useEffect(loadNotes, []);
  useEffect(storeNotesToDb, [notes]);

  return (
    <div>
      <AddNote
        notes={notes}
        setNotes={setNotes}
        note={note}
        setNote={setNote}
      />
      <AllNotes notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default App;
