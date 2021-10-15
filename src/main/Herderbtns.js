import React from "react";

function Herderbtns(props) {
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("main-text").value], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "notepad-world.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const clearTxt = () => {
    document.getElementById("main-text").value = "";
  };

  return (
    <div className="download-button">
      {/* <img src={save} onClick={downloadTxtFile} alt="Save" /> */}
      <button className="header-buttons" onClick={clearTxt}>
        Clear
      </button>
      <button className="header-buttons" onClick={downloadTxtFile}>
        Save
      </button>
    </div>
  );
}

export default Herderbtns;
