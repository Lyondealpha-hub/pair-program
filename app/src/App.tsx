import React from 'react';

import './App.css';
import { TaskList } from './componets/Tasklist';

function App() {
  return (
    <div className="App">
      <header className="">
       <TaskList />
      </header>
    </div>
  );
}

export default App;
