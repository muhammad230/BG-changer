import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("white");

  return (
    <div
      className="w-full h-screen duuration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setcolor("red");
            }}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "red" }}
          >
            red{" "}
          </button>
          <button
            onClick={() => {
              setcolor("blue");
            }}
            className="outline-none px-4 rounded-full"
            style={{ backgroundColor: "blue" }}
          >
            blue{" "}
          </button>
          <button
            onClick={() => {
              setcolor("yellow");
            }}
            className="outline-none px-4 rounded-full"
            style={{ backgroundColor: "yellow" }}
          >
            yellow{" "}
          </button>
          <button
            onClick={() => {
              setcolor("pink");
            }}
            className="outline-none px-4 rounded-full"
            style={{ backgroundColor: "pink" }}
          >
            pink{" "}
          </button>
          <button
            onClick={() => {
              setcolor("green");
            }}
            className="outline-none px-4 rounded-full"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => {
              setcolor("purple");
            }}
            className="outline-none px-4 rounded-full"
            style={{ backgroundColor: "purple" }}
          >
            purple{" "}
          </button>
          <button
            onClick={() => {
              setcolor("black");
            }}
            className="outline-none px-4 text-white rounded-full"
            style={{ backgroundColor: "black" }}
          >
            black{" "}
          </button>
          <button
            onClick={() => {
              setcolor("gray");
            }}
            className="outline-none px-4 rounded-full"
            style={{ backgroundColor: "gray" }}
          >
            gray{" "}
          </button>
          <button
            onClick={() => {
              setcolor("brown");
            }}
            className="outline-none px-4 rounded-full"
            style={{ backgroundColor: "brown" }}
          >
            brown{" "}
          </button>
          <button
            onClick={() => {
              setcolor("orange");
            }}
            className="outline-none px-4 rounded-full"
            style={{ backgroundColor: "orange" }}
          >
            orange{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
