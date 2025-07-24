import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("purple");

  return (
    <>
      <div
        className="w-full h-screen duration-200 flex justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-3xl bottom-12">
          <ul className="list-none">
            <li className="inline mx-2">
              <button
                onClick={() => setColor("red")}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:scale-125"
                style={{ backgroundColor: "red" }}
              >
                Red
              </button>
            </li>
            <li className="inline mx-2">
              <button
                onClick={() => setColor("green")}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:scale-125"
                style={{ backgroundColor: "green" }}
              >
                Green
              </button>
            </li>
            <li className="inline mx-2">
              <button
                onClick={() => setColor("yellow")}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:scale-125"
                style={{ backgroundColor: "yellow" }}
              >
                Yellow
              </button>
            </li>
            <li className="inline mx-2">
              <button
                onClick={() => setColor("olive")}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:scale-125"
                style={{ backgroundColor: "olive" }}
              >
                Olive
              </button>
            </li>
            <li className="inline mx-2">
              <button
                onClick={() => setColor("orange")}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:scale-125"
                style={{ backgroundColor: "orange" }}
              >
                Orange
              </button>
            </li>
            <li className="inline mx-2">
              <button
                onClick={() => setColor("pink")}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:scale-125"
                style={{ backgroundColor: "pink" }}
              >
                Pink
              </button>
            </li>
            <li className="inline mx-2">
              <button
                onClick={() => setColor("white")}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:scale-125"
                style={{ backgroundColor: "white" }}
              >
                White
              </button>
            </li>
            <li className="inline mx-2">
              <button
                onClick={() => setColor("black")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer hover:scale-125"
                style={{ backgroundColor: "black" }}
              >
                Black
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
