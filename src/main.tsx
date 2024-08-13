import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodoListContainer } from './Todo.tsx'
import { ToDoApp } from './ToDoApp.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoListContainer/>
    <App />
    <ToDoApp/>
  </React.StrictMode>,
)
