import { createContext, useContext, useState } from "react";
import data from "../data/data.json";

export const Data = createContext<any>(null);

export const DataProvider = ({ children }: any) => {
  
  const [task, setTask] = useState(() => data.Data);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('category');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  // const [newTodo, setNewTodo] = useState({id:Math.random(),title:title,description:description,category:category,date:date})

  console.log(task)

  return (
    <>
      <Data.Provider value={{task, setTask, title, setTitle, description,setDescription,date,setDate,category,setCategory }}>{children}</Data.Provider>
    </>
  );
};

export const useData = () => {
  return useContext(Data);
};
