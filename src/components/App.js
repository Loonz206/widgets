import React, { useState } from "react";
import Header from "../components/Header";
import Route from "../components/Route";
import Dropdown from "../components/Dropdown";
import Translate from "../components/Translate";
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
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <button onClick={() => setShow(!show)}> Hide / Show Dropdown </button>{" "}
        {show ? (
          <Dropdown
            label="Select a color"
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
          />
        ) : null}
        <br />
        <p style={{ color: `${selected.value}` }}>Hello Folks</p>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
