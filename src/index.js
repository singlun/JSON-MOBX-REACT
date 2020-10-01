import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Todo from './Todo'
import TodoList from './TodoList'

let todoList = new TodoList();
let todo = new Todo();
todo.todoItem = {
  items: [{}, {id: Math.random(), title: "Go for a walk", finished: true},{id: Math.random(), title: "Goto Supermarket", finished: false},{id: Math.random(), title: "Goto Cinema", finished: true}]
};

todoList.todo = todo;

ReactDOM.render(
    <App store={todoList}/>,
  document.getElementById('root')
);

