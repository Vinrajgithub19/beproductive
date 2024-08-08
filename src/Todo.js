import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState([]);
  const [show, setShow] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = (e) => {
    setShow([...show, task]);
    setTask(" ");
  };
  return (
    <div
      style={{
        border: "1px solid grey",
        background: "lightblue",
        display: "flex",
        justifyContent: "center",
        alignText: "center",
        flexDirection: "column",
        margin: "auto",
        textAlign: "center",
        width: "300px",
      }}
    >
      <label>AddTask</label>
      <input type="text" value={task} onChange={handleChange} />
      <button onClick={handleClick}> Add task</button>
      <label>
        {" "}
        <input type="checkbox" />
        completed task
      </label>
      <ol>
        {show.map((sho, index) => (
          <>
            <li key={index}>
              <input type="checkbox" />
              {sho}>
            </li>
          </>
        ))}
      </ol>
    </div>
  );
};
export default Todo;
