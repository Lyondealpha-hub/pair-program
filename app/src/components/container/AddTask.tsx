import React from 'react'

export const AddTask = () => {
  return (
    <>
    <div className='flex justify-center space-x-3'>
        <input className="bg-white appearance-none border-2 border-gray-600 rounded w-fit py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="task-title" type="text" placeholder="task title" />
        <input className="bg-white appearance-none border-2 border-gray-600 rounded w-fit py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" placeholder="added by" />
        <input className="bg-white appearance-none border-2 border-gray-600 rounded w-fit py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="date-added" type="text" placeholder="date added" />
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Task</button>
        </div>
        </>
    )
}
