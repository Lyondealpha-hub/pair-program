import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted with data:', formData);
  };
};

//beginning of copy
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    if (inputValue.trim() !== '') {
      if (editingIndex !== null) {
        // Update existing todo if in edit mode
        const updatedTasks = [...tasks];
        updatedTasks[editingIndex] = inputValue;
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
        // Add a new todo
        setTasks([...tasks, inputValue]);
      }
      setInputValue('');
    }
  };


  const updateTask = (index) => {
    setInputValue(tasks[index]);
    setEditingIndex(index);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setEditingIndex(null);
  };
}
  //end of copy

function AddTask() {
    return (
      <div>
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <form >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name Of Task:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md w-full py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Task Created By:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md w-full py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Description:</label>
            <textarea
              id="message"
              name="message"
              className="border border-gray-300 rounded-md w-full py-2 px-3"
              
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Submit</button>
        </form>
      </div>
      <div>
      
        
      </div>
      </div>
    )
  }

  export default AddTask