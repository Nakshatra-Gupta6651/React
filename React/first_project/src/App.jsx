import { useState } from "react";

function App() {
  const [color, setColor] = useState("blue");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ background: color }}
      >
        <div
          className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0"
        >
          <div
            className="flex flex-wrap justify-center
    gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
          >
            <button
            onClick={()=>setColor("red")}
              className="outline-none px-4 py-1
      rounded-full text-white shadow-lg"
              style={{ background: "red" }}
            >
              Red
            </button>
            <button
            onClick={()=>setColor("green")}
              className="outline-none px-4 py-1
      rounded-full text-white shadow-lg"
              style={{ background: "green" }}
            >
              Green
            </button>
            <button
            onClick={()=>setColor("black")}
              className="outline-none px-4 py-1
      rounded-full text-white shadow-lg"
              style={{ background: "black" }}
            >
            Black
            </button>
            <button
            onClick={()=>setColor("pink")}
              className="outline-none px-4 py-1
      rounded-full text-white shadow-lg"
              style={{ background: "pink" }}
            >
              Pink
            </button>
            <button
            onClick={()=>setColor("purple")}
              className="outline-none px-4 py-1
      rounded-full text-white shadow-lg"
              style={{ background: "purple" }}
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
