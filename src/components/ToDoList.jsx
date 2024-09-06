import { useState } from "react";

const ToDoList = ({ todos, updateTodo, deleteTodo }) => {
  const [editingId, setEditingId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  const handleEdit = (todo) => {
    setEditingId(todo._id);
    setUpdatedTitle(todo.title);
    setUpdatedDescription(todo.desrciption);
  };

  const handleUpdate = (id) => {
    updateTodo(id, updatedTitle, updatedDescription);
    setEditingId(null);
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          {editingId === todo._id ? (
            <div>
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
              <input
                type="text"
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
              />
              <button onClick={() => handleUpdate(todo._id)}>Update</button>
            </div>
          ) : (
            <div>
              <h3>{todo.title}</h3>
              <p>{todo.desrciption}</p>
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={() => deleteTodo(todo._id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
