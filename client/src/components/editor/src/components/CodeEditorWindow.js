import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  const handleButtonClick = () => {
    // Send the code to /togemini-autocom/process_autocom
    fetch("http://localhost:5003/api/togemini_autocom/process_autocom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: value }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Replace the code in the editor with the response data
      setValue(data.completed_code);
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
    });
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
      <button
        onClick={handleButtonClick}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Autocomplete Code
      </button>
    </div>
  );
};

export default CodeEditorWindow;
