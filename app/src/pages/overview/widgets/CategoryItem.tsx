import React, { useState } from 'react'
import { categoryItemProp } from '../../../lib/context/context';

type settingsProps = {
  onEditing: boolean,
  onSaving: boolean,
}

export const CategoryItem = ({id, name}:categoryItemProp) => {


  const [settings, setSettings] = useState<settingsProps>({
    onEditing: true,
    onSaving: false,
  })

  const Delete = () => {
    console.log('Delete')
  }

  const Edit = () => {
    setSettings(prevSettings => ({
      onEditing: !prevSettings.onEditing,
      onSaving: !prevSettings.onSaving,
    }));
  }

  const Save = () => {
    setSettings(prevSettings => ({
      onEditing: !prevSettings.onEditing,
      onSaving: !prevSettings.onSaving,
    }));
  }




  return (
    <div className="flex flex-row items-center space-x-1 p-2">
      <input id={id.toString()} value={name} type="text" className={`text-slate-500 font-bold px-4 py-2 text-sm border rounded-xl  outline-none   ${!settings.onEditing ? ' cursor-pointer focus:border focus:border-blue-400 bg-white' :'cursor-not-allowed'}`} disabled={settings.onEditing}/>

      <span className="flex space-x-2 items-center">
      { settings.onEditing &&        
          (
            <button onClick={Edit} className="p-2 rounded-xl hover:bg-stone-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:text-violet-700 text-slate-500"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                <path d="M16 5l3 3"></path>
              </svg>
            </button>
          )
        }

      { settings.onSaving &&         
              (  
                <button onClick={Save} className="px-3 py-1.5 text-sm rounded-lg text-slate-50 bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">{'Save'}</button>
              )
      }      
        
        </span>
        <button onClick={Delete} className="p-2 rounded-xl hover:bg-stone-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-slate-500 hover:text-rose-500 w-5 h-5"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 7h16"></path>
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
            <path d="M10 12l4 4m0 -4l-4 4"></path>
          </svg>
        </button>

    </div>
  );
};


