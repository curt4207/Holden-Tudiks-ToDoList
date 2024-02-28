import { useState } from "react";

import "./App.css";
import Layout from "../public/components/Layout";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    // sets the input field back to empty
    setNewItem("");
  }
  // Function to toggle the completed status of a todo
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo;
      })
    })
  }

   // Function to delete a todo
  function deleteTodos(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <Layout>
       {/* Form for adding a new item */}
        <form onSubmit={handleSubmit} className="new-item-form">
          <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              type="text"
              id="item"
            ></input>
          </div>
          <button className="button">Add</button>
        </form>

    {/* List of todos */}
        <ul className="list">
          {todos.length === 0 && "No todos"}
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <label>
                  <input type="checkbox" checked={todo.completed}
                  onChange={e => toggleTodo(todo.id, e.target.checked)}
                   />
                  {todo.title}
                </label>
                <button onClick={() => deleteTodos(todo.id)} className="btn-danger">Delete</button>
              </li>
            );
          })}
        </ul>
      </Layout>
    </>
  );
}

export default App;
