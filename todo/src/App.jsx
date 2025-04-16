import { useState } from 'react'

import Todo from "./components/Todo";
import TodoForm from './components/TodoForm';
import Search from './components/Search';

import "./App.css"
import Filter from './components/Filter';



function App() {
  const [todos, setTodos] = useState([ // Array de objetos
    {
      id: 1, 
      text: "Finalizar o projeto em React",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir ao mercado",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar uma nova tecnologia",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

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
    <Search search={search} setSearch={setSearch} /> {/* Adciono meu componente que busca o arquivo da pasta componentes  */}
    <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
    <div className="todo-list"> 
      {todos
      .filter((todo) => 
        filter === "All" 
          ? true 
          : filter === "Completed" 
          ? todo.isCompleted 
          : !todo.isCompleted
      )
      .filter((todo) => 
        todo.text.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) =>  /* Organiza em ordem desc e asc */
        sort === "Asc" 
      ? a.text.localeCompare(b.text) 
      : b.text.localeCompare(a.text))
      .map((todo) => (  /* Cria para a barra de busca a funcionalidade de procurar nos meus todos */
        <Todo 
          key={todo.id} /* Meu botoes de componentes */
          todo={todo} 
          removeTodo={removeTodo} 
          completeTodo={completeTodo}
        /> 
      ))}
    </div>
    <TodoForm addTodo={addTodo} /> 
    <div className='footer'>
    <p id='footer'>© Isac Ribeiro</p>
    </div>
  </div>
  );
}

export default App

