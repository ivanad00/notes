import { useState } from "react";
import "./App.css";
import AddNote from "./components/AddNote";

const App = () => {
  const [note, setNote] = useState({
    title: "",
    text: "",
    favorite: false,
  });

  const [notes, setNotes] = useState([]);
  
  return (
    <div>
      <AddNote
        notes={notes}
        setNotes={setNotes}
        note={note}
        setNote={setNote}
      />
    </div>
  );
};

export default App;
