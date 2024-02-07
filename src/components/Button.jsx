import React from 'react'

const Button = ({children, type, className}) => {
  return (
    <div className='flex items-center w-full justify-center'>
        <button type={type} className={`bg-[#3F8CFF] ${className} rounded-2xl  outline-none  drop-shadow-xl text-white flex items-center justify-center`}>
            {children}
        </button>
    </div>
  )
}

export default Button