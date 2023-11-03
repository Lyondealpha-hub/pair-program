import React from 'react'

export const TaskList = () => {
  return (
    <>
    <div className="text-center p-4 bg-blue-50">
      <h1 className="w-full  text-center text-3xl mb-4">Task List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add a new task"
          className="w-full p-2 border rounded-l bg-black text-white"
        />
        <button className="bg-blue-500 text-white px-4 rounded-r">
          Add Task
        </button>
      </div>

      <div>
      <table className="w-full text-sm text-left">
  <thead>
    <tr>
      <th>Task</th>
      <th className='w-full text-sm text-center'>Date</th>
      <th className='w-full text-sm text-left'>Year</th>
    </tr>
  </thead>
  <tbody className='w-full text-sm text-center'>
    <tr>
      <td>The Sliding </td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
</>
  )
}
