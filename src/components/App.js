import React from "react";
import Accordion from '../components/Accordion';

const items = [
  {
    title: 'What is React?',
    description: 'React is a front-end library'
  },
  {
    title: 'Why use React?',
    description: 'React is a favorite js library with engineers'
  },
  {
    title: 'How do you use React?',
    description: 'By creating components'
  }
]

const App = () => {
  return (
    <div>
      <Accordion items={items}/>
    </div>
  );
};

export default App;
