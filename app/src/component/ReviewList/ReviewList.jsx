import { ReviewItems } from "../ReviewItems/ReviewItems"

export const ReviewList=()=>{
    return (<>
    <div className='bg-blue-300 shadow-lg p-8 rounded-lg mx-1'>
    <h1 className=" text-center p-2 font-bold text-2xl text-white">Review</h1>
    <hr/>
        <ReviewItems/>
    </div>
    </>)
}