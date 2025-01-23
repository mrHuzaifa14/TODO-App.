// src/components/TodoItem.jsx
import React from 'react';
import './TodoItem.css'; // Import CSS for styling

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={toggleTodo}>{todo.text}</span>
            <button onClick={deleteTodo}>Delete</button>
        </li>
    );
};

export default TodoItem;