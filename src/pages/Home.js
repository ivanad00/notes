import React, { useState } from "react";
import { nanoid } from "nanoid";

import AllNotes from "../components/AllNotes";
import "../styles/note.css";

const Home = () => {
  // const newNote = {
  //   id: "",
  //   date: "",
  //   text: "",
  // };
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "DGdfgdg",
      date: "1/1/2022",
    },
    {
      id: 2,
      text: "DGdfgdg",
      date: "1/1/2022",
    },
  ]);

  // const handleNewNoteTitle = (title) => {
  //   const date = new Date();
  //   newNote = {
  //     id: nanoid(),
  //     title: title,
  //     date: date.toLocaleDateString(),
  //   };
  //   console.log("title", title);
  // };

  const handleNewNoteText = (text) => {
    console.log("text", text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  

  return (
    <div className="home">
      <AllNotes
        notes={notes}
        // handleNewNoteTitle={handleNewNoteTitle}
        handleNewNoteText={handleNewNoteText}
      />
    </div>
  );
};

export default Home;
