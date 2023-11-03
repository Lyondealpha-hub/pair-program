import React from 'react'

export const AddTask = () => {
  return (
    <div>
      <div>
        <form action="">
          <label htmlFor="task">Task:</label>
          <input type="text" id="task" name="task" placeholder="Enter a new task" required />
          <button type="submit">Add Task</button>
        </form>
      </div>

      <div>
        <table className="table-auto">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
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
  )
}
