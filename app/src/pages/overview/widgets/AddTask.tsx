import React from 'react'

export const AddTask = () => {
  return (
    <main className='flex flex-col w-1/2 px-8 py-10 rounded-xl bg-stone-50'>

      <p className="text-cyan-800 font-bold text-xl tracking-wider">Add New Task</p>

      <form action="" className="px-6 flex flex-col mt-8 space-y-6">
        <section className="grid grid-cols-3 gap-x-6 gap-y-4">

          <div className="flex flex-col space-y-1.5">
            <label className='text-sm font-medium text-slate-700 tracking-tight' htmlFor="">{'Title'}</label>
            <input type="text" className="bg-stone-100 focus:bg-white focus:border focus:border-blue-300 text-slate-400 font-medium text-base px-6 py-2 rounded-xl outline-none border placeholder-slate-300" placeholder='Enter Task Title' />
          </div>

          <div className="flex flex-col space-y-1.5">
            <label className='text-sm font-medium text-slate-700 tracking-tight' htmlFor="">{'Due Date'}</label>
            <input type="date" className="bg-stone-100 text-slate-400 font-medium text-base px-6 py-2 rounded-xl outline-none border" />
          </div>

          <div className="flex flex-col space-y-1.5">
            <label className='text-sm font-medium text-slate-700 tracking-tight' htmlFor="">{'Category'}</label>
            <input type="text" className="bg-stone-100 focus:bg-white focus:border focus:border-blue-300 text-slate-400 font-medium text-base px-6 py-2 rounded-xl outline-none border" placeholder='Type Category' />
          </div>
        </section>

        
          <div className="flex flex-col space-y-1.5">
            <label className='text-sm font-medium text-slate-700 tracking-tight' htmlFor="">{'Description'}</label>
            <textarea name="" id=""  rows={4} className="bg-stone-100 focus:bg-white focus:border focus:border-blue-300 px-6 py-2 rounded-xl outline-none border placeholder-slate-300 placeholder-opacity-50 placeholder-shown resize-none"></textarea>
          </div>

          <button className="px-6 py-2 rounded-lg  border  font-medium text-base bg-sky-400">
           <span className='text-slate-100 text-sm font-bold'> {'Add Task'}</span>
          </button>

      </form>
    </main>
  )
}
