import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Headers from "./main/Headers";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  useEffect(()=>{
    function addFirstNote(){
      if(!notes.length){
        onAddNote();
      }else{
        setActiveNote(notes[0].id);
      }
    }
    addFirstNote()
  },[notes])



  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };


  return (
    <div className="App">
     <div className="app-main">
    <Headers></Headers>
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
      
      </div>
       <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
    </div>
  );
}

export default App;
