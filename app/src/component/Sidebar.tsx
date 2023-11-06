import { useContext } from "react";
import { Data } from "../Context/context";


export const SideBar = () => {
    const {title,category,date,description,setTitle,setCategory,setDescription, setDate,task,setTask} = useContext(Data);

    const newTodo = {
        title:title,
        category:category,
        date:date,
        description:description
    }
    
    const add = () => {
        setTask([{...task, newTodo}]);
        console.log("hfdhdmhgdh",task);
        console.log("hjksakjhdshjdfskjh",newTodo);

    }

  return (
    <>
      <form method="" action="" >
        <div className="rounded-lg justify-center bg-white shadow-lg">
          <h1 className="font-bold text-xl p-5">Entry</h1>

          <div className="p-5 rounded-lg m-2 shadow-lg">
            <input className="p-1" type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title} placeholder="Title" />
          </div>
          <div className="p-5 rounded-lg m-2 shadow-lg">
            <select className="px-8 py-1 text-gray-400 text-left " onChange={(e)=> {setCategory(e.target.value)}} value={category} >
              <option className="text-gray-100">Category</option>
              <option>Todo</option>
              <option>In Progress</option>
              <option>Review</option>
              <option>Done</option>
            </select>
          </div>
          <div className="p-5 rounded-lg m-2 shadow-lg">
            <textarea className="p-1" placeholder="Description" value={description} onChange={(e)=> {setDescription(e.target.value)}}/>
          </div>
          <div className="p-5 rounded-lg m-2 shadow-lg">
            <input className="p-1" type="date" value={date} onChange={(e)=> {setDate(e.target.value)}} />
          </div>

          <button onClick={add} type="submit" className="px-5 py-2 m-2 bg-gray-400 text-white shadow-lg rounded-lg">
            submit
          </button>
        </div>
      </form>
    </>
  );
};
