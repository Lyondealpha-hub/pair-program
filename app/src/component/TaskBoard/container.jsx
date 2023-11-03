import { AddTask } from "../AddandEditTask/addTask"
import { DoneList } from "../DoneList/Donelist"
import { ProgressList } from "../ProgressList/progressList"
import { TaskList } from "../TaskList/TaskList"

export const Container = () => {
return (<>
<div className="bg-white rounded-lg m-5 ml-10 mr-8 shadow-lg p-5">
<h1 className="font-bold text-3xl m-5">Tasks</h1>
<div className=""><AddTask/></div>
<div className="flex bg-gray-200 justify-center rounded-lg p-5">
    <TaskList/>
    <ProgressList/>
    <DoneList/>
</div>
</div>
</>)
}