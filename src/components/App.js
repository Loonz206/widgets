import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import Accordion from "../components/Accordion";
import Search from "../components/Search";

const items = [
  {
    title: "What is React?",
    description: "React is a front-end library",
  },
  {
    title: "Why use React?",
    description: "React is a favorite js library with engineers",
  },
  {
    title: "How do you use React?",
    description: "By creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Shade of Blue",
    value: "blue",
  },
  {
    label: "The Color Green",
    value: "green",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Hide/Show Dropdown</button>
      {show ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
      {/* <Search /> */}
      {/* <Accordion items={items}/> */}
    </div>
  );
};

export default App;
