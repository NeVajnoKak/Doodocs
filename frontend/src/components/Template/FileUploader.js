import React, { useState } from "react";
import "../../static/style/FileUploader.css";
import Uploadfile from "../../static/svg/uploadFileSVG";

const FileUploader = () => {
  const [drag, setDrag] = useState(false);
  const [fileName, setFileName] = useState("");
  function dragStartHandler(e) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandler(e) {
    e.preventDefault();
    setDrag(false);
  }

  function onDropHandler(e) {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    if (files.length > 0) {
      setFileName(files[0].name);
    }
    console.log(files);
    setDrag(false);
  }

  return (
    <>
      <div className="file-upload">
        {drag ? (
          <div
            className="drop-area"
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
            onDrop={(e) => onDropHandler(e)}
          >
            Отпустите файлы, чтобы загрузить их{" "}
          </div>
        ) : (
          <>
            <div className="file-icon">
              <Uploadfile />

              <div
                className="file-drag-text"
                onDragStart={(e) => dragStartHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragOver={(e) => dragStartHandler(e)}
              >
                {fileName ? (
                  <span>{fileName}</span>
                ) : (
                  "Выберите файл или перенесите его сюда"
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FileUploader;
