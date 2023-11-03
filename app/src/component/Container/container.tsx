import { Button } from "../Button/button"
import { Userinfo } from "../UserInfo/userinfo"
export const Container = ()=>{
    return (
    <>
    <div className="justify-center shadow-lg p-8 rounded-lg shadow-lg bg-white m-12 flex ">
        <Userinfo/>
        <Button/>
    </div>
    </>
    )
}