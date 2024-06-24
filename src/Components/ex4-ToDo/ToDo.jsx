import React, { useState } from "react";
import "./ToDo.css";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [editTodo, setEditTodo] = useState("");

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleEditClick = (index) => {
    setIsEditing(true);
    setCurrentIndex(index);
    setEditTodo(todos[index]);
  };

  const handleSaveClick = () => {
    const updatedTodos = [...todos];
    updatedTodos[currentIndex] = editTodo;
    setTodos(updatedTodos);
    setIsEditing(false);
    setCurrentIndex(null);
    setEditTodo("");
  };

  const handleTaskChange = (event) => {
    setEditTodo(event.target.value);
  };

  return (
    <div className="todo-list">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleChange}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {isEditing && currentIndex === index ? (
              <input
                type="text"
                value={editTodo}
                onChange={handleTaskChange}
              />
            ) : (
              <span>{todo}</span>
            )}
            {isEditing && currentIndex === index ? (
              <button onClick={handleSaveClick}>Save</button>
            ) : (
              <button onClick={() => handleEditClick(index)}>Edit</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
