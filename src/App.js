import { useState } from "react";
import "./App.css";

function App() {
  const [nameState, setNameState] = useState("");

  return (
    <>
      <input value={nameState} onChange={(e) => setNameState(e.target.value)} />
      <div>My name is {nameState}</div>
    </>
  );
}

export default App;
