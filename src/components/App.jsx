import { useState } from "react";
import React from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleClick() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }
  function handleChange(event) {
    const newVal = event.target.value;
    setInputText(newVal);
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem) => (
            <li>{todoitem} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
