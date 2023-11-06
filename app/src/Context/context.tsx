import { createContext, useContext, useState } from "react";
import data from "../data/data.json";

export const Data = createContext<any>(null);

export const DataProvider = ({ children }: any) => {
  const [task, setTask] = useState(()=>(data));

  return (
    <>
      <Data.Provider value={{ task, setTask }}>{children}</Data.Provider>
    </>
  );
};

export const useData = () => {
  return useContext(Data);
};
