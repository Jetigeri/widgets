import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";


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
      <Header></Header>
      <Route path="/">
        <Accordion items={items}></Accordion>
      </Route>
      <Route path="/list">
        <Search></Search>
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        ></Dropdown>
      </Route>
      <Route path="/translate">
        <Translate></Translate>
      </Route>
    </div>
  );
}

export default App;
