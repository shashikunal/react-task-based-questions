//! Create a application to add notes using react.
import React, { useState, useEffect } from "react";
import "./style.css";
// import { marked } from "marked";
import { FaPlus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    // Load notes from localStorage on component mount
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    // Save notes to localStorage whenever notes change
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = { id: Date.now(), text: "", isEditing: true };
    setNotes([...notes, newNote]);
    setEditingNote(newNote.id);
  };

  const deleteNote = id => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  const toggleEditing = id => {
    setNotes(
      notes.map(note =>
        note.id === id ? { ...note, isEditing: !note.isEditing } : note
      )
    );
  };

  const handleTextChange = (id, newText) => {
    setNotes(
      notes.map(note => (note.id === id ? { ...note, text: newText } : note))
    );
  };

  return (
    <div className="App">
      <button className="add" onClick={addNote}>
        <FaPlus />
        Add note
      </button>
      <div className="notes-container">
        {notes.map(note => (
          <div key={note.id} className="note">
            <div className="tools">
              <button className="edit" onClick={() => toggleEditing(note.id)}>
                <FaEdit />
              </button>
              <button className="delete" onClick={() => deleteNote(note.id)}>
                <FaRegTrashAlt />
              </button>
            </div>

            {note.isEditing ? (
              <textarea
                value={note.text}
                onChange={e => handleTextChange(note.id, e.target.value)}
              />
            ) : (
              <div
                className="main"
                dangerouslySetInnerHTML={{ __html: marked(note.text) }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesApp;
