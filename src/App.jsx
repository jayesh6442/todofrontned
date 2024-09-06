import { useState, useEffect } from "react";
import axios from "axios";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  // Fetch todos from backend
  const fetchTodos = async () => {
    try {
      const response = await axios.get("https://todo-s2x8.onrender.com/");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add a new todo
  const addTodo = async (title, desrciption) => {
    try {
      await axios.post("https://todo-s2x8.onrender.com/create", {
        title,
        desrciption,
      });
      fetchTodos(); // Refresh todo list after adding
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  // Update a todo
  const updateTodo = async (id, title, desrciption) => {
    try {
      await axios.put("https://todo-s2x8.onrender.com/put", {
        id,
        title,
        desrciption,
      });
      fetchTodos(); // Refresh todo list after updating
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete("https://todo-s2x8.onrender.com/delete", {
        data: { todoId: id },
      });
      fetchTodos(); // Refresh todo list after deleting
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
