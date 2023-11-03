import { createContext } from "react";
// import  from '../data/data.json'

export const Data  = createContext('');

export const DataProvder = ()=>{
    return (<>
    <Data.Provider value="">

    </Data.Provider>
    </>)
}


