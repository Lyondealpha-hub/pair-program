import React from "react";

export const TaskList = () => {
  return (
    <>
      <div className="text-center px-64 bg-blue-50 h-screen">
        <h1 className="w-full  text-center text-3xl mb-4">Task List</h1>

        <div className="flex mb-4 space-x-3">
          <input
            type="text"
            placeholder="Add a new task"
            className="flex-1 p-2 border rounded-l bg-black text-white rounded-xl"
          />

          <input
            type="text"
            placeholder="Description"
            className="flex-1 p-2 border rounded-l bg-black text-white rounded-xl"
          />

          <input
            type="text"
            placeholder="Category"
            className="flex-1 p-2 border rounded-l bg-black text-white rounded-xl"
          />

          <input
            type="text"
            placeholder="Date"
            className="flex-1 p-2 border rounded-l bg-black text-white rounded-xl"
          />

          <button className="bg-blue-500 text-white  rounded-xl px-4 py-2">
            Add Task
          </button>
        </div>

        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Task
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Lorem
                  </th>
                  <td className="px-6 py-4">Lorem</td>
                  <td className="px-6 py-4">Lorem</td>
                  <td className="px-6 py-4">1999</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="/"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <p>Edit</p> 
                      <p>
                      </p> 
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Lorem
                  </th>
                  <td className="px-6 py-4">Lorem</td>
                  <td className="px-6 py-4">Lorem </td>
                  <td className="px-6 py-4">1999</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="/"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Lorem
                  </th>
                  <td className="px-6 py-4">Lorem</td>
                  <td className="px-6 py-4">Lorem</td>
                  <td className="px-6 py-4">2099</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="/"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
