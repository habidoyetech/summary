import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'


const Layout = ({children}) => {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token === null) {
            navigate("/login")
        }

    }, [navigate])

  return (
    <div className='w-full min-h-screen bg-primary-color'>
        <div className='w-full h-full bg-transparent'>
            <div className='w-full h-full bg-transparent p-4'>
                <div className='bg-transparent'>
                    <Navbar/>

                </div>
                <main className='py-10 w-full overflow-hidden'>
                    {children}
                </main>

            </div>
        </div>

    </div>
  )
}

export default Layout