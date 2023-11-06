import { useState } from "react"

const details =()=>{
    let name = "Jesse"
    let age = 12;
    let phone = '01287834543';
    return (<View name={name} age={age} phone={phone}  />)    
}

export const View =({name,age,phone}:any)=>{
    return (<>
    <div>Name : {name}</div>
    <div>age : {age}</div>
    <div>phone : {phone}</div>
    </>)
}