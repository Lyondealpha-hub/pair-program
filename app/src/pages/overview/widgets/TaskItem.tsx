import useTodolist, { todoProp } from "../../../lib/context/context";
import EditTask from "./EditTask";

export type TaskItemProps = {
    id?: number;
    title: string;
    dueDate: string;
    category: string;
    description: string;
}

export const TaskItem = ({id, title, dueDate, category, description}:TaskItemProps) => {

    const { setTodoItems, todoItems} = useTodolist();

    const Delete = () => {

        const updatedValues = todoItems.todos?.filter((item:todoProp) => item.id !== id)

        setTodoItems({
            todos: updatedValues
        })

    }


  return (
    <article className='flex flex-col rounded-lg bg-zinc-100 px-4 py-2 space-y-1.5 border-2 border-slate-500 relative'>
        <span className="flex flex-row justify-between items-center">
            <span className="flex flex-col space-y-0.5">
                <aside className='flex space-x-2 items-center'>
                    <p className="text-slate-700 font-bold text-lg tracking-wide">{title}</p>  

                    <EditTask
                        id={id}
                        title={title}
                        dueDate={dueDate}
                        category={category}
                        description={description}
                    />
                </aside>
                <p className="text-blue-500 text-xs font-semibold tracking-tight">{category}</p>

            </span>
            <time className="text-xs font-semibold text-slate-400">{`Due on ${dueDate}`}</time>
        </span>
        <p className="text-slate-600 text-sm font-semibold tracking-wide mb-5 truncate">{description}</p>

        <footer className="flex  self-end space-x-1.5 items-center">
            <button onClick={Delete} className="hover:border-b-2 hover:border-black flex items-center p-2 cursor-pointer absolute bottom-0 right-0 mr-2 mb-2 mt-2 space-x-2">
                <p className='text-slate-400 font-semibold text-xs hover:text-rose-500'>{'Delete'}</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-400"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 7h16"></path>
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                    <path d="M10 12l4 4m0 -4l-4 4"></path>
                </svg>
            </button>
        </footer>
    </article>
  )
}
