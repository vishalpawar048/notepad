import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function MainEditor({ activeNote, onUpdateNote }) {
  const editorRef = useRef(null);
  var preHtml =
    "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
  var postHtml = "</body></html>";
  const Save = () => {
    if (editorRef.current) {
      const element = document.createElement("a");

      var html = preHtml + editorRef.current.getContent() + postHtml;
      const file = new Blob([html], {
        type: "application/msword",
      });

      element.href = URL.createObjectURL(file);
      element.download = "theNotepad.doc";
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
    }

    // if (!activeNote) return <div className="no-active-note">No Active Note</div>;
  };
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };
  return (
    <>
      <button onClick={Save}>Save</button>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=""
        onChange={(e) => onEditField("body", editorRef.current.getContent())}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
}
