import React, {useState} from 'react'
import { DeleteOutlineRounded, Edit, Done, Add, HourglassBottomRounded } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <React.Fragment>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 id="child-modal-title">Text in a child modal</h2>
            <p id="child-modal-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <Button onClick={handleClose}>Close Child Modal</Button>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }

export const Tasklist = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [formData, setFormData] = useState({title: "",name: "",date: ""});

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    alert(`Title: ${formData.title}, Name: ${formData.name}, Date: ${formData.date}`
    );
};

  return (
    <>
    <div className='h-screen justify-center space-y-4 m-6'>
        <div className='justify-center space-y-6'>
        <h1 className='font-mono... text-3xl text-slate-600'>Task Manager</h1>
        <button onClick={handleOpen} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>Add Task<Add className='text-sm justify-center'/></button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 250}}>
            <div className='space-y-3'>
          <h2 className="space-y-3 font-semibold text-gray-600" id="parent-modal-title">Fill in details below to add new task</h2>
          <div onSubmit={handleSubmit} className='justify-center space-y-3'>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" value={formData.title} onChange={handleChange}/>

      <label htmlFor="name">Added by:</label>
      <input type="name" id="name" name="name" value={formData.name} onChange={handleChange}/>

      <label htmlFor="date">Date Added:</label>
      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange}/>
      <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>Submit</button>
    </div>
        </div>
        <ChildModal />
        </Box>
      </Modal>
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
