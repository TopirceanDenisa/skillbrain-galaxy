import React, { useState } from "react";
import Card from "./components/card/Card";
import Input from "./components/input/Input";
import TodoItem from "./components/todo-item/TodoItem";
import TextArea from "./components/input/TextArea";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import "./App.css";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
];

function App() {
  // State pentru todos
  const [todos, setTodos] = useState(TODOS_MOCK);
  
  // State pentru modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // State pentru formular
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  
  // State pentru edit mode
  const [editingId, setEditingId] = useState(null);

  // Filtrare todos
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  // Handler pentru input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler pentru submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      alert("Please enter a title!");
      return;
    }

    if (editingId) {
      // Edit mode - actualizează todo existent
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editingId
            ? { ...todo, title: formData.title, description: formData.description }
            : todo
        )
      );
      setEditingId(null);
    } else {
      // Create mode - adaugă todo nou
      const newTodo = {
        id: Date.now().toString(),
        title: formData.title,
        description: formData.description,
        completed: false,
      };
      setTodos((prev) => [...prev, newTodo]);
    }

    // Reset form
    setFormData({ title: "", description: "" });
  };

  // Handler pentru deschidere modal (Add)
  const handleOpenModal = () => {
    setFormData({ title: "", description: "" });
    setEditingId(null);
    setIsModalOpen(true);
  };

  // Handler pentru închidere modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ title: "", description: "" });
    setEditingId(null);
  };

  // Handler pentru toggle complete
  const handleToggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Handler pentru delete
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Handler pentru edit
  const handleEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setFormData({
        title: todoToEdit.title,
        description: todoToEdit.description,
      });
      setEditingId(id);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="App">
      <div className="app-container">
        {/* Create Todo Card - Fixat sus */}
        <Card>
          <h2>Create Todo</h2>
          <form onSubmit={handleSubmit}>
            <Input
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Title"
              type="text"
            />
            <TextArea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Description"
            />
            <Button type="submit">Create</Button>
          </form>
        </Card>

        {/* My Todos */}
        <Card>
          <h1>My todos</h1>
          <Button onClick={handleOpenModal}>Add +</Button>
          
          <div className="list-container">
            {activeTodos.length > 0 ? (
              activeTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  completed={todo.completed}
                  onToggleComplete={handleToggleComplete}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))
            ) : (
              <p>No active todos. Add one!</p>
            )}
          </div>

          <div className="separator"></div>

          <h2>Completed</h2>
          <div className="list-container">
            {completedTodos.length > 0 ? (
              completedTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  completed={todo.completed}
                  onToggleComplete={handleToggleComplete}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))
            ) : (
              <p>No completed todos yet.</p>
            )}
          </div>
        </Card>

        {/* Modal pentru Edit */}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <Card>
            <h2>Edit Todo</h2>
            <form onSubmit={handleSubmit}>
              <Input
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Title"
                type="text"
              />
              <TextArea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
              />
              <Button type="submit">Update</Button>
            </form>
          </Card>
        </Modal>
      </div>
    </div>
  );
}

export default App;