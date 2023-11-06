import React from 'react'
import TableData from './Table';

export const Tasklist = () => {
  return (
    <>
    <div className='h-screen justify-center space-y-4 m-6'>
        <div className='justify-center space-y-6'>
        <h1 className='font-mono... text-3xl text-slate-600'>Task Manager</h1>
        </div>
     <TableData />
        </div>
    </>
  )
}
