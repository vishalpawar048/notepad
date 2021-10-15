import ReactMarkdown from "react-markdown";
import Download from "./Herderbtns";
import MainEditor from "./MainEditor";
import SimpleNotepad from "./SimpleNotepad";

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
    console.log("value",value,field)
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <div className="no-active-note">No Active Note</div>;


  return (
    <div className="app-main-text-area">
      <div className="app-main-note-edit">
        {/* <MainEditor
          className="text-area"
          id="main-text" 
          activeNote = {activeNote} onUpdateNote = {onUpdateNote}
            ></MainEditor> */}
        <SimpleNotepad  activeNote = {activeNote} onUpdateNote = {onUpdateNote}></SimpleNotepad>
      </div>
    </div>
  );
};

export default Main;
