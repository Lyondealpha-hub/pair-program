import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  const handleChange = (e: React.ChangeEvent<any>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted with data:', formData);
  };
};

function AddTask() {
    return (
      <div>
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
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <form >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name Of Task:</label>
            <input
              type="text"
              id="name"
              name="name"
              // value={formData.name} onSubmit={handleSubmit}
              // onChange={handleChange}
              className="border border-gray-300 rounded-md w-full py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Task Created By:</label>
            <input
              type="email"
              id="email"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              className="border border-gray-300 rounded-md w-full py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Description:</label>
            <textarea
              id="message"
              name="message"
              // value={formData.message}
              // onChange={handleChange}
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