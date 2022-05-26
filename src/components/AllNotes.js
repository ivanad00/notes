import React, { useState } from "react";
import Note from "./Note";

import toggle from "../assets/toggle.png";
import toggle2 from "../assets/toggle2.png";

import "../styles/allNotes.css";

const AllNotes = ({ notes, setNotes, showModal, setShowModal, editNote }) => {
  const [showAll, setShowAll] = useState(true);
  const favNotes = notes.filter((item) => item.favorite);
  const otherNotes = notes.filter((item) => (item.favorite ? false : true));

  const handleFav = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="notes-container">
      <div className="filter-fav">
        <button
          className="filter-fav"
          onClick={handleFav}
          data-cy="favoriteButton"
        >
          {showAll ? (
            <img className="icon" src={toggle2} alt="off" />
          ) : (
            <img className="icon" src={toggle} alt="on" />
          )}
        </button>
        <span className="filter-fav-text"> Filter favorite</span>
      </div>
      {favNotes.length === 0 && otherNotes.length === 0 && (
        <h4 className="no-notes">No notes to show...</h4>
      )}
      {showAll === true && (
        <div className="fav-notes-container">
          {notes.map((item, number) => (
            <Note
              key={item.id}
              notes={notes}
              note={item}
              setNotes={setNotes}
              showModal={showModal}
              setShowModal={setShowModal}
              editNote={editNote}
              number={number + 1}
            />
          ))}
        </div>
      )}

      {showAll === false && favNotes.length >= 1 && (
        <div className="fav-notes">
          <h4>FAVORITE</h4>
          <div className="fav-notes-container">
            {favNotes.map((item) => (
              <Note
                key={item.id}
                notes={notes}
                note={item}
                setNotes={setNotes}
                showModal={showModal}
                setShowModal={setShowModal}
                editNote={editNote}
              />
            ))}
          </div>
        </div>
      )}

      {showAll === false && favNotes.length > 0 && otherNotes.length >= 1 && (
        <div className="other-notes">
          <h4>OTHER</h4>
          <div className="other-notes-container">
            {otherNotes.map((item) => (
              <Note
                key={item.id}
                notes={notes}
                note={item}
                setNotes={setNotes}
                showModal={showModal}
                setShowModal={setShowModal}
                editNote={editNote}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllNotes;
