import { useRef } from "react";
import "./App.css";

function App() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <>
      <input type="text" ref={ref} />
      <button onClick={handleClick}>Click me to Focus Input</button>
    </>
  );
}

export default App;
