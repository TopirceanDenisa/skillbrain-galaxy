import React from 'react';
import './TodoItem.css';
import CheckBox from '../checkbox/CheckBox';

const TodoItem = (props) => {
  const { id, title, description, completed, onToggleComplete, onDelete, onEdit } = props;

  const handleCheckboxChange = () => {
    if (onToggleComplete) {
      onToggleComplete(id);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit(id);
    }
  };

  return (
    <div className={`todo-item ${completed ? 'todo-completed' : ''}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <CheckBox checked={!!completed} onChange={handleCheckboxChange} />
          <h4>{title}</h4>
        </div>

        <div className="icon-buttons">
          <button className="edit-btn" onClick={handleEdit}>Edit</button>
          <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
      </div>

      <div className="separator"></div>
      <p>{description}</p>
    </div>
  );
};

export default TodoItem;
