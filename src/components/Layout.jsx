import React, { Children } from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {


  return (
    <div className='w-full min-h-screen bg-primary-color'>
        <div className='w-full h-full bg-transparent'>
            <div className='w-full h-full bg-transparent p-4'>
                <div className='bg-transparent'>
                    <Navbar/>

                </div>
                <main className='py-10 w-full'>
                    {children}
                </main>

            </div>
        </div>

    </div>
  )
}

export default Layout