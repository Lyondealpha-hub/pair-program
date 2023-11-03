
import { TaskItems } from '../TaskItem/taskitems'
export const TaskList = () => {
    return (<>
    <div className='bg-red-400 p-8 shadow-lg rounded-lg m-5 ml-8 mr-8 overscroll-contain'>
    <h1 className=" text-center p-2 font-bold text-2xl text-white ">Todo</h1>
    <hr/>
        <TaskItems/>
    </div>
    </>)
}