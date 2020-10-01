import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoList from './TodoList'
import Todo from './Todo'

const store = new TodoList()
let todo = new Todo();
todo.title = "Get Coffee";
store.todos.push(todo)
todo = new Todo();
todo.title = "Go For a Walk";
store.todos.push(todo)

store.todos[0].finished = true

ReactDOM.render(
    <App store={store}/>,
  document.getElementById('root')
);

