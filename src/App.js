import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [nameState, setNameState] = useState("");
  const rederCount = useRef(1);
  const inputRef = useRef();

  // 1.
  // useState causes components to re-render when the state changes.
  // useRef doens't cause re-render
  useEffect(() => {
    rederCount.current += 1;
  });

  // 2.
  // useRef can be used to store a reference to a DOM element.

  return (
    <>
      <input
        ref={inputRef}
        value={nameState}
        onChange={(e) => setNameState(e.target.value)}
      />
      <div>My name is {nameState}</div>
      <div>I have been rendered {rederCount.current} times</div>
    </>
  );
}

export default App;
