import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const API = "http://localhost:8080/api/todos";

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get(API);
      setTodos(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // ADD TODO
  const addTodo = async () => {
    if (!title) return;

    await axios.post(API, {
      title,
      description: "",
      completed: false
    });

    setTitle("");
    fetchTodos();
  };

  // DELETE TODO
  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTodos();
  };

  // CLICK EDIT BUTTON
  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditTitle(todo.title);
  };

  // UPDATE TODO
  const updateTodo = async () => {
    if (!editTitle) return;

    await axios.put(`${API}/${editId}`, {
      title: editTitle,
      description: "",
      completed: false
    });

    setEditId(null);
    setEditTitle("");
    fetchTodos();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 p-6">
      
      <div className="w-full max-w-xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 transition-all duration-500 animate-fadeIn">

        <h1 className="text-4xl font-bold text-center text-blue-500 mb-8 tracking-wide">
          Todo List
        </h1>
  
        {/* Input Section */}
        <div className="flex gap-3 mb-8">
          <input
            type="text"
            placeholder="Enter Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
  
          <button
            onClick={addTodo}
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            Add
          </button>
        </div>
  
        {/* Todo List */}
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              {editId === todo.id ? (
                <div className="flex w-full gap-3">
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  />
                  <button
                    onClick={updateTodo}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <span className="text-lg text-gray-700 font-medium">
                    {todo.title}
                  </span>
  
                  <div className="flex gap-3">
                    <button
                      onClick={() => startEdit(todo)}
                      className="px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition"
                    >
                      Edit
                    </button>
  
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
  
}

export default App;
