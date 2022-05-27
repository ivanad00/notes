import React, { useRef } from "react";
import favorite from "../assets/favorite.svg";
import favoritefull from "../assets/favorite-full.svg";
import edit from "../assets/edit.svg";
import remove from "../assets/delete.svg";
import download from "../assets/download.svg";

import html2canvas from "html2canvas";

import { jsPDF } from "jspdf";

import "../styles/note.css";

const Note = ({
  note,
  notes,
  setNotes,
  showModal,
  setShowModal,
  editNote,
  number,
}) => {
  const changeFav = () => {
    setNotes(
      notes.map((item) =>
        item.id === note.id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  const removeNote = () => {
    setNotes(notes.filter((item) => (item.id === note.id ? false : true)));
  };

  const printNote = useRef();
  const handleDownloadPdf = async () => {
    const element = printNote.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("note.pdf");
  };

  return (
    <div className="note-card" ref={printNote}>
      <div>
        <div className="title-container">
          <div className="paginate">{number} </div>
          <div className="title">{note.title}</div>
          <button className="fav-button" onClick={changeFav}>
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
        <button
          onClick={() => {
            setShowModal(!showModal);
            editNote(note.id);
          }}
        >
          <img className="icon" src={edit} alt="edit" />
        </button>
        <button onClick={removeNote} className="remove">
          <img className="icon" src={remove} alt="remove" />
        </button>
        <button
          type="button"
          onClick={handleDownloadPdf}
          className="download-all"
        >
          <img src={download} alt="download" className="img-download" />
        </button>
      </div>
    </div>
  );
};

export default Note;
