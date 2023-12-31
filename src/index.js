//1) Import the react and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

//2) Get a reference to the div with ID root
const el = document.getElementById("root");

//3) Tell React to take control of that elemnt
const root = ReactDOM.createRoot(el);

//4)Create a component
function App() {
  const date = new Date();
  const time = date.toLocaleTimeString();
  return <h1>{time}</h1>;
}

//5)Show the component on the screen
root.render(<App />);
