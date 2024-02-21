import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import isAfter from 'date-fns/isAfter';
import fromUnixTime from 'date-fns/fromUnixTime';
import { useAuth } from '../context/AuthContext';


const Layout = ({children}) => {

    const navigate = useNavigate();
    const {logout} = useAuth()

    useEffect(() => {
        const token = localStorage.getItem('token')
        

        if (token === null) {
            navigate("/login")
        }

        if (token !== null) {
            const decode = jwtDecode(token)
            console.log(decode)
            const date = fromUnixTime(decode.exp);
            if (isAfter(date, new Date())) {
                
            }
            if (isAfter(new Date(), date)) {
                console.log(date)
                logout()
                navigate('/login')
            }
            
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