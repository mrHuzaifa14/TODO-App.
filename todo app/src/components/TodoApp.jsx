// src/components/TodoApp.jsx
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import './TodoApp.css'; // Import CSS for styling

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) => {
        setTodos([...todos, { text: todo, completed: false }]);
    };

    const toggleTodo = (index) => {
        const newTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="todo-app">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodo} />
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        todo={todo}
                        toggleTodo={() => toggleTodo(index)}
                        deleteTodo={() => deleteTodo(index)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;