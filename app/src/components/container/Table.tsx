import React, { useState } from 'react'; 
import TaskForm from './AddTask'; 
import jsonData from '../../Database/db.json'; 
  
function TableData() { 
  const [TaskData, setTaskData] = useState(jsonData); 
  
  const tableRows = TaskData.map((info) => { 
    return ( 
      <tr> 
        <td>{info.id}</td> 
        <td>{info.title}</td> 
        <td>{info.name}</td> 
        <td>{info.date}</td>
      </tr> 
    ); 
  }); 
  
  const addRows = (data : any) => { 
    const totalTask = TaskData.length; 
    data.id = totalTask + 1; 
    const updatedTaskData = [...TaskData]; 
    updatedTaskData.push(data); 
    setTaskData(updatedTaskData); 
  }; 
  
  return ( 
    <div> 
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400"> 
        <thead className='text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400'> 
          <tr> 
            <th scope='col' className='px-6 py-3 rounded-l-lg'>No.</th>
            <th scope='col' className="px-6 py-3 rounded-l-lg">Title</th> 
            <th scope='col' className="px-6 py-3 rounded-l-lg">Added By</th> 
            <th scope='col' className="px-6 py-3 rounded-l-lg">Date</th> 
          </tr> 
        </thead> 
        <tbody>{tableRows}</tbody> 
      </table> 
      <TaskForm func={addRows} /> 
    </div> 
  ); 
} 
  
export default TableData;