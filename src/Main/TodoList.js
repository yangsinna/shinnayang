import React, { useState } from 'react';

function TodoList() {
  const initialState = [
    {
      task: 'learn react.js',
      isCompleted: false,
    },
    {
      task: 'learn react hook',
      isCompleted: false,
    },
    {
      task: 'learn typescript',
      isCompleted: false,
    },
  ];

  const [todos, setTodo] = useState(initialState);
  const [task, setTask] = useState('');

  const handleNewTask = (e) => {
    let t = e.target.value;
    setTask(t);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === '') return;

    setTodo([...todos, { task, isCompleted: false }]);
    setTask('');
  };

  const handleRemoveTack = (index) => {
    // const newTodos = [...todos];
    // newTodos.splice(index, 1);
    // setTodo(newTodos);
    const newTodos = [...todos].filter(
      (todo, todoIndex) => todoIndex !== index
    );
    setTodo(newTodos);
  };

  return (
    <div>
      <h1></h1>
      <div>
        <p>나만의 냉장고</p>
        <form onSubmit={handleSubmit}>
          <input onChange={handleNewTask} value={task} placeholder="ADD TASK" />
        </form>
      </div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo.task}　
              <span
                onClick={() => {
                  handleRemoveTack(index);
                }}
              >
                ×
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
