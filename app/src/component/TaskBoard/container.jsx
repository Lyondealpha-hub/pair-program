import { Counts } from "../Counts"
import { DoneList } from "../DoneList/Donelist"
import { ProgressList } from "../ProgressList/progressList"
import { ReviewList } from "../ReviewList/ReviewList"
import { SideBar } from "../Sidebar"
import { TaskList } from "../TaskList/TaskList"

export const Container = () => {
return (
<main className="">
<div className="bg-gray-700 rounded-lg m-2 shadow-lg p-4">
<h1 className="font-bold text-white text-3xl m-2">Tasks Board</h1>
<hr className="m-3"/>
{/* <div className=""><AddTask/></div> */}
<div className="flex justify-center gap-2">
    <SideBar/>
    <div className="flex  bg-white rounded-lg shadow-lg p-2">
        <TaskList/>
        <ProgressList/>
        <ReviewList/>
        <DoneList/>
    </div>
    <Counts/>
</div>
</div>
</main>)
}