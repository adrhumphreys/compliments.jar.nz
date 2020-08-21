import React, { useState, useEffect } from "react";
import getLine from "./lines";

function App() {
  let [name, setName] = useState("Kelly");
  let [line, setLine] = useState(null);

  useEffect(() => setLine(getLine(name)), []);
  const refresh = () => setLine(getLine(name));

  return (
    <div className="app">
      <h1>{line}</h1>
      <button className="refresh-button" onClick={refresh}>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-arrow-repeat"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"
          />
          <path
            fillRule="evenodd"
            d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z"
          />
        </svg>
      </button>
    </div>
  );
}

export default App;
