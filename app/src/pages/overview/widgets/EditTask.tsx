import React, { Fragment, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import useTodolist, { categoryItemProp } from '../../../lib/context/context';
import { Dialog, Transition } from '@headlessui/react';
import { TaskItemProps } from './TaskItem';

export default function EditTask({ id, title, dueDate, category, description}:TaskItemProps) {

    const { setTodoItems, todoItems, categoryItems } = useTodolist();

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<TaskItemProps>(
        {
            defaultValues: {
                title: title,
                dueDate: dueDate,
                category: category,
                description: description
            }
        }
    );


    const onSubmit: SubmitHandler<TaskItemProps> = (data: TaskItemProps) => {


        const updatedTodoItems = todoItems.todos?.map((item:any) => {
            if (item.id === id) {
                return {
                    id: id,
                    title: data.title,
                    dueDate: data.dueDate,
                    category: data.category,
                    description: data.description,
                };
            } else {
                return item;
            }
        });


        setTodoItems({
            todos: updatedTodoItems,
        });

        closeModal()
    };





    return (
        <main>
            <button onClick={openModal} className="rounded-xl p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-400 hover:text-violet-800" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                    <path d="M16 5l3 3"></path>
                </svg>
            </button>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {'Update Task'}
                                    </Dialog.Title>
                                    <form onSubmit={handleSubmit(onSubmit)} className="px-2 flex flex-col mt-8 space-y-6">
                                        <section className="flex flex-col space-y-3">

                                            <div className="flex flex-col space-y-1.5">
                                                <label className='text-sm font-medium text-slate-700 tracking-tight' htmlFor="">{'Title'}</label>
                                                <input  type="text" className="bg-stone-100 focus:bg-white focus:border focus:border-blue-300 text-slate-400 font-medium text-base px-6 py-2 rounded-xl outline-none border placeholder-slate-300" placeholder='Enter Task Title' {...register("title", { required: true })} />
                                                {errors.title && <span className="text-red-500 text-sm">Title is required</span>}
                                            </div>

                                            <div className="flex flex-col space-y-1.5">
                                                <label className='text-sm font-medium text-slate-700 tracking-tight' htmlFor="">{'Due Date'}</label>
                                                <input  type="date" className="bg-stone-100 text-slate-400 font-medium text-base px-6 py-2 rounded-xl outline-none border" {...register("dueDate", { required: true })} />
                                                {errors.dueDate && <span className="text-red-500 text-sm">Date is required</span>}
                                            </div>


                                            <div className="flex flex-col space-y-1.5">
                                                <label className='text-sm font-medium text-slate-700 tracking-tight' htmlFor="">{'Category'}</label>
                                                <select  className="bg-stone-100 focus:bg-white focus:border focus:border-blue-300 text-slate-400 font-medium text-base px-6 py-2 rounded-xl outline-none border" {...register("category", { required: true })}>
                                                    {categoryItems.categories.map((item: categoryItemProp) => (
                                                        <option  value={item.name}>{item.name}</option>
                                                    ))}
                                                </select>
                                                {errors.category && <span className="text-red-500 text-sm">Category field is required</span>}
                                            </div>

                                        </section>


                                        <div className="flex flex-col space-y-1.5">
                                            <label className='text-sm font-medium text-slate-700 tracking-tight' htmlFor="">{'Description'}</label>
                                            <textarea  id="" rows={4} className="bg-stone-100 focus:bg-white focus:border focus:border-blue-300 px-6 py-2 rounded-xl outline-none border placeholder-slate-300 placeholder-opacity-50 placeholder-shown resize-none" {...register("description", { required: true })}></textarea>
                                            {errors.description && <span className="text-red-500 text-sm">This field is required</span>}
                                        </div>

                                        <button className="px-6 py-2 rounded-lg  border  font-medium text-base bg-sky-400">
                                            <span className='text-slate-100 text-sm font-bold'> {'Add Task'}</span>
                                        </button>

                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </main>
    )
}

