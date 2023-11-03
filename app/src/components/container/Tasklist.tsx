import React from 'react'

export const Tasklist = () => {
  return (
    <>
    <div className='h-screen space-y-4'>
        <div className='justify-center space-y-4'>
        <h1 className='font-serif... text-2xl'>Task Manager</h1>
        <div className='flex justify-left space-x-3'>
        <input className="bg-white appearance-none border-2 border-gray-600 rounded w-fit py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="task-title" type="text" value="task title" />
        <input className="bg-white appearance-none border-2 border-gray-600 rounded w-fit py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" value="name" />
        <input className="bg-white appearance-none border-2 border-gray-600 rounded w-fit py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="date-added" type="text" value="date added" />
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Task</button>
        </div>
        </div>

        <div className=''>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">
                    Task Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                    Date Added
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                </th>
                <td className="px-6 py-4">
                </td>
                <td className="px-6 py-4">
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                </th>
                <td className="px-6 py-4">
                </td>
                <td className="px-6 py-4">
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                </th>
                <td className="px-6 py-4">
                   
                </td>
                <td className="px-6 py-4">
                </td>
            </tr>
        </tbody>
        
    </table>
        </div>
    </div>
    </>
  )
}
