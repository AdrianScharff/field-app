import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center h-screen bg-slate-600">
      <div className="flex items-center justify-center relative h-[48.57rem] w-[75rem] bg-green-300 border-8 border-white">
        <div className="absolute flex justify-between w-full">
          <div className="h-[29rem] w-[13rem] bg-transparent border-y-8 border-r-8 border-white"></div>
          <div className="h-[29rem] w-[13rem] bg-transparent border-y-8 border-l-8 border-white"></div>
        </div>
        <div className="absolute flex justify-between w-full">
          <div className="h-[12rem] w-[7rem] bg-transparent border-y-8 border-r-8 border-white"></div>
          <div className="h-[12rem] w-[7rem] bg-transparent border-y-8 border-l-8 border-white"></div>
        </div>
        <div className="h-[48.57rem] w-[8px] bg-white"></div>
        <div className="h-[16rem] w-[16rem] absolute rounded-full bg-transparent border-8 border-white"></div>
        <div className="h-[2rem] w-[2rem] absolute rounded-full bg-white"></div>
      </div>
      <div className="h-[48.57rem] w-[30rem] bg-green-400"></div>
    </div>
  );
}

export default App;
