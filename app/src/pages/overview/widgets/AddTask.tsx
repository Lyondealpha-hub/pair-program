import React from 'react'
import { AddCategories } from './AddCategories'
import { SubmitHandler, useForm } from 'react-hook-form'
import useTodolist, { categoryItemProp } from '../../../lib/context/context'

export type AddTasksProps = {
  id?: number,
  title: string,
  dueDate: string,
  category: string,
  description: string
}


export const AddTask = () => {

  const {setTodoItems, todoItems, categoryItems} = useTodolist()

  const { register, handleSubmit, formState: { errors }, reset } = useForm<AddTasksProps>(
      {
            defaultValues: {
            title: '',
            dueDate: '',
            category: '',
            description: ''
          }
        }
  );

  const onSubmit: SubmitHandler<AddTasksProps> = (data:AddTasksProps) => {

    const newTodo = {
      id: todoItems.todos.length + 1,
      title: data.title,
      dueDate: data.dueDate,
      category: data.category,
      description: data.description
    }

    setTodoItems({
      todos: [...todoItems.todos, newTodo]
    })


    reset();

  }


  return (
    <main className='flex px-2 py-2 rounded-xl bg-stone-50 flex-1'>

      <AddCategories/>

      <form onSubmit={handleSubmit(onSubmit)} className="px-2 flex flex-col mt-8 space-y-6">
        <section className="flex flex-col space-y-3">

          <div className="flex flex-col space-y-1.5">
            <label className='text-sm font-medium text-slate-700 tracking-tight' htmlFor="">{'Title'}</label>
            <input type="text" className="bg-stone-100 focus:bg-white focus:border focus:border-blue-300 text-slate-400 font-medium text-base px-6 py-2 rounded-xl outline-none border placeholder-slate-300" placeholder='Enter Task Title' {...register("title", { required: true })} />
            {errors.title && <span className="text-red-500 text-sm">Title is required</span>}
          </div>

          <div className="flex flex-col space-y-1.5">
            <label className='text-sm font-medium text-slate-700 tracking-tight' htmlFor="">{'Due Date'}</label>
            <input type="date" className="bg-stone-100 text-slate-400 font-medium text-base px-6 py-2 rounded-xl outline-none border" {...register("dueDate", { required: true })} />
            {errors.dueDate && <span className="text-red-500 text-sm">Date is required</span>}
          </div>


          <div className="flex flex-col space-y-1.5">
            <label className='text-sm font-medium text-slate-700 tracking-tight' htmlFor="">{'Category'}</label>
            <select className="bg-stone-100 focus:bg-white focus:border focus:border-blue-300 text-slate-400 font-medium text-base px-6 py-2 rounded-xl outline-none border" {...register("category", { required: true })}>
              <option value="" disabled selected>Select Category</option>
              {categoryItems.categories.map((item:categoryItemProp) => (
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
            {errors.category && <span className="text-red-500 text-sm">Category field is required</span>}
          </div>

        </section>

        
          <div className="flex flex-col space-y-1.5">
            <label className='text-sm font-medium text-slate-700 tracking-tight' htmlFor="">{'Description'}</label>
            <textarea id=""  rows={4} className="bg-stone-100 focus:bg-white focus:border focus:border-blue-300 px-6 py-2 rounded-xl outline-none border placeholder-slate-300 placeholder-opacity-50 placeholder-shown resize-none" {...register("description", { required: true })}></textarea>
            {errors.description && <span className="text-red-500 text-sm">This field is required</span>}
          </div>

          <button className="px-6 py-2 rounded-lg  border  font-medium text-base bg-sky-400">
           <span className='text-slate-100 text-sm font-bold'> {'Add Task'}</span>
          </button>

      </form>
    </main>
  )
}


