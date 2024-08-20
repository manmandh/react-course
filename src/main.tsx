import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import { Component1, Component2, Component3, Component4 } from './RefEffect';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>\
    {/* <TodoListContainer/>
    <App />
    <ToDoApp/> */}
    {/* <Provider store={store}>
      <div>
        <h1>Netflix Clone</h1>
        <AddMovie />
        <MovieList />
      </div>
    </Provider>
    <Component1/>
    <Component2/> */}
    <Component4/>
  </React.StrictMode>
);
