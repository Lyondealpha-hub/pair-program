export const SideBar = ()=>{
    return (<>
     <form method="" action="">
        <div className="rounded-lg justify-center bg-white shadow-lg">
            <h1 className="font-bold text-xl p-5">Entry</h1>
            
                <div className="p-5 rounded-lg m-2 shadow-lg">
                    <input className="p-1" type="text" placeholder="Title"/>
                </div>
                <div className="p-5 rounded-lg m-2 shadow-lg">
                    <select className="px-8 py-1 text-gray-400 text-left">
                        <option className="text-gray-100">Category</option>
                        <option>Todo</option>
                        <option>In Progress</option>
                        <option>Review</option>
                        <option>Done</option>
                    </select>
                </div>
                <div className="p-5 rounded-lg m-2 shadow-lg">
                    <textarea className="p-1" placeholder="Description"/>
                </div>
                <div className="p-5 rounded-lg m-2 shadow-lg">
                    <input className="" type="date"/>
                </div>
             
                <button className="px-5 py-2 m-2 bg-gray-400 text-white shadow-lg rounded-lg">submit</button>
                

        </div>
    </form>
    </>)
}