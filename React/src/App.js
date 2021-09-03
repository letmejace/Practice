import React, { useState } from "react";

function App() {
  const [hello, setHello] = useState("");
  const change = () => {
    setHello("👋 Hello World");
  };
  const clear = () => {
    setHello("");
  };
  return (
    <>
      <header>
        <h1>{hello}</h1>
      </header>
      <div className="wrap">
        <a className="button" onClick={change}>
          Click me!
        </a>
        <a className="button2" onClick={clear}>
          Clear!
        </a>
      </div>
    </>
  );
}

export default App;
