import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [nameState, setNameState] = useState("");
  const rederCount = useRef(1);
  const inputRef = useRef();
  const prevName = useRef("");

  // 1.
  // useState causes components to re-render when the state changes.
  // useRef doens't cause re-render
  useEffect(() => {
    rederCount.current += 1;
  }, [nameState]);

  // 2.
  // useRef can be used to store a reference to a DOM element.
  function focus() {
    inputRef.current.focus();
  }

  // 3.
  // useRef can be used to store the previous value of a state
  useEffect(() => {
    prevName.current = nameState;
  }, [nameState]);

  return (
    <>
      <input
        ref={inputRef}
        value={nameState}
        onChange={(e) => setNameState(e.target.value)}
      />
      <div>
        My name is {nameState}, and it used to be {prevName.current}
      </div>
      <div>I have been rendered {rederCount.current} times</div>
      <button onClick={focus}>Focus my mouse</button>
    </>
  );
}

export default App;
