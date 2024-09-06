/* eslint-disable react/prop-types */
import { useState } from "react";
const ToDoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desrciption, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title, desrciption);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Description"
        value={desrciption}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default ToDoForm;
