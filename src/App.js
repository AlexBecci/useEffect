import React, { useState } from "react";
import LifeCycle from "./LifeCycle";
import FetchCard from "./FetchCard";
import ResizeApp from "./ResizeApp";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>App</h1>
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {show && <ResizeApp />}
      {show && <LifeCycle />}
      <FetchCard />
    </div>
  );
}
export default App;
