import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is react",
    content: "React is a front end js framework",
  },
  {
    title: "Why use react",
    content: "React is a fav js library among engineers",
  },
  {
    title: "How do you use react",
    content: "You just simply create components and thats it :)",
  },
];

const options = [
  {
    label: "the Color Red",
    value: "red",
  },
  {
    label: "the Color Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown
        onSelectedChange={setSelected}
        selected={selected}
        options={options}
      ></Dropdown>
    </div>
  );
}

export default App;
