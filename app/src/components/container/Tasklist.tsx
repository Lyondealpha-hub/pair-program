import React from 'react'
import { DeleteOutlineRounded, Edit, Done, Add, HourglassBottomRounded } from '@mui/icons-material';

export const Tasklist = () => {
  return (
    <>
    <div className='h-screen justify-center space-y-4 m-6'>
        <div className='justify-center space-y-6'>
        <h1 className='font-mono... text-3xl text-slate-600'>Task Manager</h1>
        {/* <div className='flex justify-left space-x-3'>
        <input className="bg-white appearance-none border-2 border-gray-600 rounded w-fit py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="task-title" type="text" placeholder="task title" />
        <input className="bg-white appearance-none border-2 border-gray-600 rounded w-fit py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" placeholder="added by" />
        <input className="bg-white appearance-none border-2 border-gray-600 rounded w-fit py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="date-added" type="text" placeholder="date added" />
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Task</button></div> */}
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>Add Task<Add className='text-sm justify-center'/></button>
        </div>

        <div className=''>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">
                    Task Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Added By
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                    Date Added
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                    Actions
                </th>
                <th scope='col' className='px-6 py-3 rounded-r-lg'>
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Innorik meeting
                </th>
                <td className="px-6 py-4">
                    Dennis
                </td>
                <td className="px-6 py-4">
                    11-03-23
                </td>
                <td className="px-6 py-4 space-x-4">
                    <DeleteOutlineRounded className='text-rose-600' />
                    <Edit className='text-gray-500 hover:text-blue-600' />
                </td>
                <td className="px-6 py-4 space-x-4">
                <Done className='text-green-400' />
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Pair programming
                </th>
                <td className="px-6 py-4">
                    Ahmed
                </td>
                <td className="px-6 py-4">
                    11-03-23
                </td>
                <td className="px-6 py-4 space-x-4">
                    <DeleteOutlineRounded className='text-rose-600' />
                    <Edit className='text-gray-500 hover:text-blue-600' />
                </td>
                <td className="px-6 py-4 space-x-4">
                <Done className='text-green-400' />
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Personal studies
                </th>
                <td className="px-6 py-4">
                   Stone
                </td>
                <td className="px-6 py-4">
                    11-03-23
                </td>
                <td className="px-6 py-4 space-x-4">
                    <DeleteOutlineRounded className='text-rose-600' />
                    <Edit className='text-gray-500 hover:text-blue-600' />
                </td>
                <td className="px-6 py-4 space-x-4">
                <HourglassBottomRounded className='text-fuchsia-500' />
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Hit the gym
                </th>
                <td className="px-6 py-4">
                   Stone
                </td>
                <td className="px-6 py-4">
                    11-03-23
                </td>
                <td className="px-6 py-4 space-x-4">
                    <DeleteOutlineRounded className='text-rose-600' />
                    <Edit className='text-gray-500 hover:text-blue-600' />
                </td>
                <td className="px-6 py-4 space-x-4">
                <HourglassBottomRounded className='text-fuchsia-500' />
                </td>
            </tr>
        </tbody>
        
    </table>
        </div>
    </div>
    </>
  )
}
