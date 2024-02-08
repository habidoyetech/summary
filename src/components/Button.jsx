import React from 'react'

const Button = ({children, type, className, onClick}) => {
  return (
    <div className='flex items-center w-full justify-center'>
        <button type={type} onClick={onClick} className={` ${className} rounded-2xl  outline-none  drop-shadow-xl flex items-center justify-center`}>
            {children}
        </button>
    </div>
  )
}

export default Button