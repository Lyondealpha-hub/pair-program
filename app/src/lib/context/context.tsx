import React, { createContext, useState } from 'react';
import data from '../config/data.json'


type Props = {
    children: React.ReactNode;
};

export type todoProp = {
    id: number;
    title: string;
    dueDate: string;
    description: string;
    category: string;
};

type todoItemsProp = {
    todos: todoProp[];
};

export const AppContext = createContext<any>(undefined);

export const TodolistContext: React.FC<Props> = ({ children }) => {

    const [todoItems, setTodoItems] = useState<todoItemsProp>(() => data); // Fix for Problem 1


    return (
        <AppContext.Provider value={{ todoItems, setTodoItems }}>
            {children}
        </AppContext.Provider>
    );
};

export default function useTodolist() {
    return React.useContext(AppContext);
}

