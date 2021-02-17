import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

function ToDoList() {

  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    const newTodos = [todo, ...todos];

    if (todo.text.length === 0) {
      alert('Input required')
      return;
    }
    setTodos(newTodos);
  }

  const updateTodo = (todoId, newValue) => {

    if (newValue.text.length === 0) {
      alert('Input required');
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr);
  }

  return (
    <div className="todo-app-cont">
      <h1>What's the plan for today?</h1>
      <ToDoForm onSubmit={addToDo} />
      <div className="todo-cont">
        <ToDo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
      </div>
    </div>
  )
}

export default ToDoList
