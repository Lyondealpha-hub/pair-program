import { AddTask } from "../AddTask/addTask"
import { Counts } from "../Counts"
import { DoneList } from "../DoneList/Donelist"
import { ProgressList } from "../ProgressList/progressList"
import { SildeBar } from "../Sidebar"
import { TaskList } from "../TaskList/TaskList"

export const Container = () => {
return (
<main className="flex flex-col h-screen w-screen">
<div className="bg-gray-700 rounded-lg m-5 ml-10 mr-8 shadow-lg p-5">
<h1 className="font-bold text-white text-3xl m-2">Tasks Board</h1>
<hr className="m-3"/>
{/* <div className=""><AddTask/></div> */}
<div className="flex justify-center gap-8">
    <SildeBar/>
    <div className="flex bg-white justify-center rounded-lg shadow-lg p-5">
        <TaskList/>
        <ProgressList/>
        <DoneList/>
    </div>
    <Counts/>
</div>
</div>
</main>)
}