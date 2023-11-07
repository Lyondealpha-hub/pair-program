import React from 'react'
import { TaskItem } from './TaskItem'
import useTodolist, { todoProp } from '../../../lib/context/context';

export const TaskList = () => {
    const { setTodoItems, todoItems } = useTodolist();


    return (
        <main className="flex flex-col w-1/2 px-8 py-10 rounded-xl bg-stone-200">
            <p className="text-cyan-800 font-bold text-xl tracking-wider">
                {"Task List"}
            </p>

            <section className="flex flex-col space-y-1.5 mt-8 overflow-y-auto">
                
                {todoItems.todos.map((item:todoProp) => (
                    <TaskItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        dueDate={item.dueDate}
                        category={item.category}
                        description={item.description}
                    />
                ))}
            </section>
        </main>
    );
};
