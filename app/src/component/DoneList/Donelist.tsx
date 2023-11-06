import { DoneItems } from "../DoneTask/DoneItems"

export const DoneList = ()=>{
    return (<>
    <div className='bg-green-400 p-8 rounded-lg shadow-lg mx-1'>
        <h1 className=" text-center p-2 font-bold text-2xl text-white">Done</h1>
        <hr/>
        <DoneItems/>
    </div>
    </>)
}