import React from 'react'

export default function Sidebar() {
  return (
    <div className='h-screen min-w-[275px] flex flex-col bg-white pl-7 pt-5 gap-1'>
        <div className='w-full px-3 py-2 bg-blue-500 rounded-md text-white'>
          Boards
        </div>
        <div className='w-full px-3 py-2 bg-white rounded-md text-blue-500 hover:bg-blue-200'>
          Tasks
        </div>
    </div>
  )
}
