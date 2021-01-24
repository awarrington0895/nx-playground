import React, { useState, useEffect } from 'react';
import { Todo } from '@madhat/data';
import { Todos } from '@madhat/ui';

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos)
  }, []);

  const addTodo = () => {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then(it => it.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  return (
    <>
      <h1>Todos</h1>
      <Todos todos={todos} />

      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

export default App;
