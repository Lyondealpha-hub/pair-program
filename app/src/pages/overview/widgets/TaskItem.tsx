import React from 'react'
import useTodolist from '../../../lib/context/context';

type TaskItemProps = {
    title: string;
    dueDate: string;
    category: string;
    description: string;
}

export const TaskItem = ({title, dueDate, category, description}:TaskItemProps) => {



  return (
    <article className='flex flex-col rounded-lg bg-zinc-100 px-4 py-2 space-y-1.5 border-2 border-slate-500'>
        <span className="flex flex-row justify-between items-center">
            <span className="flex flex-col space-y-1">
                <p className="text-slate-700 font-bold text-lg tracking-wide">{title}</p>  
                <p className="text-blue-400 text-xs font-semibold tracking-tight">{category}</p>

            </span>
            <time className="text-xs font-semibold text-slate-400">{`Due on ${dueDate}`}</time>
        </span>
        <p className="text-slate-700 text-sm font-normal tracking-wide mb-5 truncate">{'lorem ipsum dolor'}</p>

        <footer className="flex  self-end space-x-2 items-center pt-4">
            <span className="rounded-xl p-2 bg-violet-50">
                <svg  xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-700"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                    <path d="M16 5l3 3"></path>
                </svg>
            </span>
            <span className="rounded-xl p-2 bg-rose-100 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-rose-600" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 7h16"></path>
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                    <path d="M10 12l4 4m0 -4l-4 4"></path>
                </svg>
            </span>
        </footer>
    </article>
  )
}
