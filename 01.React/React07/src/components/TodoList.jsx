import React from "react";
import { useState } from "react";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();
    setTodo([...todo, input]);
    setInput("");
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={addHandler}>
        <input
          type="text"
          placeholder="Enter Todo"
          value={input}
          onChange={inputHandler}
        />
        <button type="submit">Add Todo</button>
      </form>

      <h3>
        {todo.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </h3>

      <br />
      <br />
    </div>
  );
};

export default TodoList;
