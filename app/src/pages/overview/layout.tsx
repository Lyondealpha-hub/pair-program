import React from 'react'
import { AddTask } from './widgets/AddTask'
import { TaskList } from './widgets/TaskList'

export const RootLayout = () => {
  return (
    <main className='h-screen w-screen flex bg-blue-400 p-10'>
        <div className='flex-1 flex space-x-6'>
          <AddTask />
          <TaskList/>
        </div>
    </main>
  )
}


