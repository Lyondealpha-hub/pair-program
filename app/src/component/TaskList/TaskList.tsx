
import { TaskItems } from '../TaskItem/taskitems'
export const TaskList = () => {
    return (<>
    <div className='bg-red-400 p-8 shadow-lg rounded-lg mx-1'>
    <h1 className=" text-center p-2 font-bold text-2xl text-white ">Todo</h1>
    <hr/>
        <TaskItems/>
    </div>
    </>)
}