import React, { useState } from "react";
import "./markdownEditor.css";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = e => {
    setMarkdown(e.target.value);
  };

  const renderMarkdown = text => {
    return text
      .replace(/(?:\r\n|\r|\n)/g, "<br>") // Line breaks
      .replace(/# (.+)/g, "<h1>$1</h1>") // H1
      .replace(/## (.+)/g, "<h2>$1</h2>") // H2
      .replace(/### (.+)/g, "<h3>$1</h3>") // H3
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>") // Bold
      .replace(/\*(.+?)\*/g, "<i>$1</i>") // Italic
      .replace(/`(.+?)`/g, "<code>$1</code>"); // Inline code
  };

  return (
    <div className="markdown-editor">
      <div className="header">
        <h1>Markdown Editor</h1>
        <button className="info-button" onClick={() => setShowModal(true)}>
          i
        </button>
      </div>
      <section>
        <div className="editor-container">
          <textarea
            className="markdown-input"
            value={markdown}
            onChange={handleInputChange}
            placeholder="Type your markdown here..."
          ></textarea>
        </div>

        <div className="preview-container">
          <div
            className="markdown-preview"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }}
          ></div>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Suggestions</h2>
            <ul>
              <li>Use `#`, `##`, or `###` for headings.</li>
              <li>Use `**bold**` for bold text.</li>
              <li>Use `*italic*` for italic text.</li>
              <li>Wrap text with `` ` `` for inline code.</li>
              <li>
                Start writing in the left panel to see the preview in real-time.
              </li>
            </ul>
            <button
              className="close-button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarkdownEditor;
