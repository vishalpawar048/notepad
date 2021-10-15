import ReactMarkdown from "react-markdown";
import Download from "./Herderbtns";
import MainEditor from "./MainEditor";

const SimpleNotepad = ({ activeNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
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
        <textarea
          className="text-area"
          id="main-text"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
    </div>
  );
};

export default SimpleNotepad;
