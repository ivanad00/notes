import React from "react";
import favorite from "../assets/favorite.svg";
import favoritefull from "../assets/favorite-full.svg";
import edit from "../assets/edit.svg";
import remove from "../assets/delete.svg";
import '../styles/note.css'

const Note = ({ note, notes, setNotes, number }) => {
  return (
    <div className="note-card">
      <div>
        <div className="title-container">
          <div>{number} </div>
          <div className="title">{note.title}</div>
          <button className="fav-button">
            {note.favorite ? (
              <img className="icon" src={favoritefull} alt="favfull" />
            ) : (
              <img className="icon" src={favorite} alt="fav" />
            )}
          </button>
        </div>
        <div className="text">{note.text}</div>
        <div className="date">{note.date}</div>
      </div>
      <div className="note-buttons">
        <button>
          <img className="icon" src={edit} alt="edit" />
        </button>
        <button>
          <img className="icon" src={remove} alt="remove" />
        </button>
      </div>
    </div>
  );
};

export default Note;
