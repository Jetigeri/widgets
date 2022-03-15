import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/Accordion";

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

function App() {
  return (
    <div>
      <Accordion items={items}></Accordion>
    </div>
  );
}

export default App;
