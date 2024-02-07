import React from 'react'

const Button = ({children, type}) => {
  return (
    <div className='flex items-center w-full justify-center'>
        <button type={type} className='bg-[#3F8CFF] rounded-2xl px-10 py-3 space-x-4 outline-none  drop-shadow-xl text-white flex items-center justify-center'>
            {children}
        </button>
    </div>
  )
}

export default Button