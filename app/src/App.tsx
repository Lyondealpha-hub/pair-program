import React, { useState } from 'react'
import AddTask from './components/AddTask'
function App() {
  return <div>
    
    <div>
          <h2 className='text-center text-2xl font-bold mb-4 mt-10'>Task Management System</h2>
        </div>
        <div>
          <h3 className='mx-4 mt-8 text-2xl font-bold mb-4 text-center'>Add Task</h3>
          <div>
          <div className='text-center'>
            <a
                href="#"
                className="text-blue-500 hover:text-blue-700 underline"
            >
                Edit
            </a>
          </div>
          <div className='text-center'>
            <a
                href="#"
                className="text-blue-500 hover:text-blue-700 underline"
            >
                Delete
            </a>
          </div>
          </div>
    </div>
    <div>
      <AddTask />
    </div>
  </div>
    
}

export default App
