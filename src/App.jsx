import React, { useState } from "react";
import Add from "./components/Add";
import Content from "./components/content";

export default function App() {
  const [input, setInput] = useState("");
  const [content, setContent] = useState([]);

  function handleInputValue(value) {
    setInput(value);
  }

  function handleDelete(name) {
    setContent((prevState) => prevState.filter((item) => item !== name));
  }
  function handleDone(id) {
    setContent((prevState) =>
    prevState.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
  )}

  function AddButton() {
    setContent((prevState) => [
      ...prevState,
      { name: input, id: Date.now(), done: false },
    ]);
   setInput('')
  }

  const result = content.map((item) => {
    return (
      <Content
        key={item.id}
        name={item.name}
        id={item.id}
        done={item.done}
        handleDelete={() => handleDelete(item)}
        handleDone={() => handleDone(item.id)}
      />
    );
  });
  console.log(result);

  return (
    <>
      <div className="container">
        <Add handleInputchange={handleInputValue} handleAdd={AddButton} value={input} />
        {result}
      </div>
    </>
  );
}
