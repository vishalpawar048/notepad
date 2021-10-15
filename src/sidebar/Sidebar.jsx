// import {ReactComponent as Delete} from "../images/trash.png";
import React from 'react';
import trash from '../images/trash.png'; 

const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        {/* <h1>Notes</h1> */}
        <button className="add-button" onClick={onAddNote}>New</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, body, lastModified }, i) => (
          <div
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
          >
            {/* <div className="sidebar-note-title">
              <strong>{title}</strong>
              <Delete  className= "delete-icon" onClick={(e) => onDeleteNote(id)}></Delete>
            </div> */}

            <p className={"app-app-sidebar-textbody"}>{body ? body.substr(0, 50) + "..." : "Blank Page"}</p>
            <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
              <img src={trash} onClick={(e) => onDeleteNote(id)} alt="delete" />
              {/* <Delete  className= "delete-icon" onClick={(e) => onDeleteNote(id)}></Delete> */}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
