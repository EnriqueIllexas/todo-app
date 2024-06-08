import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoCreateButton } from './components/TodoCreateButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar naranja', completed: false},
  {text: 'Ir al colegio', completed: false},
  {text: 'Cortar mandarina', completed: false},
  {text: 'Ver peliculas', completed: true},
  {text: 'Saludar a todos :)', completed:true},

]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSeachValue] = React.useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  );
  
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text = text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);

    /* En este caso lo que estamos haciendo es generar una copia del array inicial todos que teniamos por defecto y lo 'copiamos' para retenerlo en la nueva variable new todos */
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text = text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);

    /* En este caso lo que estamos haciendo es generar una copia del array inicial todos que teniamos por defecto y lo 'copiamos' para retenerlo en la nueva variable new todos */
  }

    console.log('los usuarios buscan todos de ' + searchValue + setTodos)
  
  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
          searchValue={searchValue}
          setSeachValue={setSeachValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
        
      </TodoList>

      <TodoCreateButton/>  
      
    </React.Fragment>

  );
}



export default App;
/* Comentar algo shift + alt + A */

/* Renderizar array */