import { ProgressItems } from "../ProgressItems/progressItems"

export const ProgressList=()=>{
    return (<>
    <div className='bg-yellow-300 shadow-lg p-8 rounded-lg mx-1 '>
    <h1 className=" text-center p-2 font-bold text-2xl text-white">In Progress</h1>
    <hr/>
        <ProgressItems/>
    </div>
    </>)
}