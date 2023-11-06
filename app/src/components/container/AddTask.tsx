import React, { useState } from 'react'; 
  
function TaskForm(props: { func: (arg0: { title: String; name: string; date: string; }) => void; }) { 
  const [title, setTitle] = useState(''); 
  const [name, setName] = useState(''); 
  const [date, setDate] = useState(''); 
  
  const changeTitle = (event: { target: { value: React.SetStateAction<string>; }; }) => { 
    setTitle(event.target.value); 
  }; 

  const changeName = (event: { target: { value: React.SetStateAction<string>; }; }) => { 
    setName(event.target.value); 
  }; 
  
  const changeDate = (event: { target: { value: React.SetStateAction<string>; }; }) => { 
    setDate(event.target.value); 
  }; 
  
  const transferValue = (event: { preventDefault: () => void; }) => { 
    event.preventDefault(); 
    const val = { 
      title,
      name, 
      date, 
    }; 
    props.func(val); 
    clearState(); 
  }; 
  
  const clearState = () => { 
    setTitle('');
    setName(''); 
    setDate(''); 
  }; 
  
  return ( 
    <div className='space-x-3 space-y-12'> 
      <label>Title</label> 
      <input type="text" value={title} onChange={changeTitle} className='border-solid border-2 rounded-sm border-blue-400' /> 
      <label>Added By</label> 
      <input type="text" value={name} onChange={changeName} className='border-solid border-2 rounded-sm border-blue-400' /> 
      <label>Date Added</label> 
      <input type="date" value={date} onChange={changeDate} className='border-solid border-2 rounded-sm border-blue-400' /> 
      <button onClick={transferValue} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>Add Task</button> 
    </div> 
  ); 
} 
  
export default TaskForm;
