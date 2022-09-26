import React from "react";
import { useState } from "react";

const Todolist = () => {
  const [something, setSomething] = useState("");
  const [toDo, setToDo] = useState([]);
  const handleChange = (e) => {
    setSomething(e.target.value);
  };
  const hadleSubmit = (e) => {
    e.preventDefault();
    if (something === "") {
      return;
    }

    setToDo((current) => [...current, something]);
    setSomething("");
  };
  console.log(toDo);
  return (
    <div>
      <h1>MY todos = {toDo.length}</h1>
      <form onSubmit={hadleSubmit}>
        <input
          type="text"
          value={something}
          onChange={handleChange}
          placeholder="Write something..."
        ></input>
        <button>Add to do</button>
      </form>
      <hr />
      <ul>
        {toDo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
