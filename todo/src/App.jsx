import { useState } from 'react'

import Todo from "./components/Todo";
import TodoForm from './components/TodoForm';

import "./App.css"


function App() {
  const [todos, setTodos] = useState([ // Array de objetos
    {
      id: 1, 
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

/* FUNÇÃO QUE ADCIONA TODO */
  
  const addTodo = (text, category) => { 
    const newTodos = [...todos, /* Criação de array com todos os todo */
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ]; 
    setTodos(newTodos);
  };

/* FUNÇÃO QUE REMOVE TODO */

  const removeTodo = (id) => { /*Utilizamos ID para identificar o todo exato que será deletado */
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  }

/* FUNÇÃO QUE COMPLETA TODO */

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
  }

  return ( 
  <div className="app"> 
    <h1>Lista de tarefas</h1> 
    <div className="todo-list"> 
      {todos.map((todo) => ( 
        <Todo key={todo.id} /* Meu botoes de componentes */
        todo={todo} 
        removeTodo={removeTodo} 
        completeTodo={completeTodo}/> 
      ))}
    </div>
    <TodoForm addTodo={addTodo} /> 
  </div>
  );
}

export default App

