import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingContent, setEditingContent] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/notes');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Could not fetch notes:", error);
    }
  };

  const createNote = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newNote = await response.json();
      setNotes([...notes, newNote]);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error("Could not create note:", error);
    }
  };

  const updateNote = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/notes/${editingNoteId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: editingTitle, content: editingContent }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedNote = await response.json();

      setNotes(notes.map(note => (note._id === editingNoteId ? updatedNote : note)));
      setEditingNoteId(null);
      setEditingTitle('');
      setEditingContent('');
    } catch (error) {
      console.error("Could not update note:", error);
    }
  };


  const deleteNote = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/notes/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setNotes(notes.filter(note => note._id !== id));
    } catch (error) {
      console.error("Could not delete note:", error);
    }
  };


  return (
    <div className="App">
      <h1>Notes App</h1>

      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={createNote}>Create Note</button>
      </div>

      {editingNoteId && (
        <div>
          <input
            type="text"
            placeholder="Title"
            value={editingTitle}
            onChange={(e) => setEditingTitle(e.target.value)}
          />
          <textarea
            placeholder="Content"
            value={editingContent}
            onChange={(e) => setEditingContent(e.target.value)}
          />
          <button onClick={updateNote}>Update Note</button>
        </div>
      )}

      <div className="notes-grid">
        {notes.map(note => (
          <div key={note._id} className="note-card">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => {
              setEditingNoteId(note._id);
              setEditingTitle(note.title);
              setEditingContent(note.content);
            }}>Edit</button>
            <button onClick={() => deleteNote(note._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;