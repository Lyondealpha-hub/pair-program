import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { TodolistContext } from './lib/context/context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodolistContext>
      <App />
    </TodolistContext>
  </React.StrictMode>

);


