import React, { createContext, useState } from 'react';
import data from '../config/data.json'
import categories from '../config/category.json'


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

export type categoryItemProp = {
    id: number;
    name: string;

};

export type categoryItems = {
    categories: categoryItemProp[];
};

 
export const AppContext = createContext<any>(undefined);

export const TodolistContext: React.FC<Props> = ({ children }) => {

    const [todoItems, setTodoItems] = useState<todoItemsProp>(() => data); 
    const [categoryItems, setCategoryItems] = useState<categoryItems>(() => categories);



    return (
        <AppContext.Provider value={{
                todoItems, setTodoItems,
                categoryItems, setCategoryItems
             }}>
            {children}
        </AppContext.Provider>
    );
};

export default function useTodolist() {
    return React.useContext(AppContext);
}

