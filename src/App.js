import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="flex w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap fixed justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="rounded-full outline-none px-2 py-1 text-white" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => setColor("orange")} className="rounded-full outline-none px-2 py-1 text-black" style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={() => setColor("blue")} className="rounded-full outline-none px-2 py-1 text-white" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={() => setColor("gray")} className="rounded-full outline-none px-2 py-1 text-white" style={{backgroundColor:"gyar"}}>Gray</button>
          <button onClick={() => setColor("green")} className="rounded-full outline-none px-2 py-1 text-white" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={() => setColor("pink")} className="rounded-full outline-none px-2 py-1 text-black" style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={() => setColor("black")} className="rounded-full outline-none px-2 py-1 text-white" style={{backgroundColor:"black"}}>Black</button>
        </div>
      </div>
    </div>
  );
}

export default App;
