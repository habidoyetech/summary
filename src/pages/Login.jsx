import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import Password from '../components/Password'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Alert from '../components/Alert'
import { fromUnixTime, isAfter } from "date-fns";
import { useAuth } from '../context/AuthContext'
import { jwtDecode } from 'jwt-decode'




const LoginPage = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [alertIsOpen, setAlertIsOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { logout, setToken} = useAuth()

    useEffect(() => {

        const token = localStorage.getItem('token')

        if(token) {
            const decode = jwtDecode(token)
            const date = fromUnixTime(decode.exp)
            console.log(isAfter(new Date(), date))
            if (isAfter(date, new Date())) {
                navigate("/dashboard")
            }
            if (isAfter(new Date(), date)) {
                logout()
            }       
        }
        
    }, [navigate])

    function handleLoginInput (e) {
        setLoginData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            console.log('logging in')
            if(!loginData.email) {
                setError(true)
                setAlertIsOpen(true)
                setMessage('Email field required')
                setLoading(false)
                return
            }

            if(!loginData.password) {
                setError(true)
                setAlertIsOpen(true)
                setMessage('Password field required')
                setLoading(false)
                return
            }

            
            const response = await fetch('https://summary-be.vercel.app/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
            });

            console.log(response)

            
            const data = await response.json()
            if(!response.ok) {
                setMessage(data.message)
                setError(true)
                setLoading(false)
                setAlertIsOpen(true)
            }

            if(response.ok) {
                setMessage(data.message)
                
                setToken(data.token)
                setLoading(false)
                setAlertIsOpen(true)
                navigate("/dashboard")
            }
            
          // Handle successful login here
          
            // Do something with the response data
        } catch (err) {
            console.log(err)
            setError(true)
            setAlertIsOpen(true)
            setMessage("No Connection")
            setLoading(false)
        } finally {
            // setTimeout(() => {
            //     setAlertIsOpen(false)    
            // }, 2000);
            
        }
      };

  return (
    <div className='w-full h-screen'>
        <div className='bg-primary-color w-full h-full p-6 flex items-center relative justify-center'>
            {alertIsOpen && <Alert message={message} setError={setError} error={error} setAlertIsOpen={setAlertIsOpen}/>}
            <div className='w-full h-full rounded-3xl shadow-lg shadow-transparent  bg-white'>
                <div className='flex justify-center items-center h-full'>
                    <div className='flex justity-center space-y-3 items-center flex-col w-[400px]'>
                        <div className='flex items-center flex-col space-y-5'>
                            <div>
                                <svg width="103" height="104" viewBox="0 0 103 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M76.9217 22.9319C78.1533 21.5225 78.0184 19.3638 76.4813 18.296C70.8248 14.3669 63.9717 12.4482 57.0338 12.9151C48.963 13.4582 41.4384 17.1852 36.1156 23.2762C30.7927 29.3672 28.1074 37.3233 28.6506 45.3941C29.1175 52.3321 31.9371 58.8663 36.5887 63.9453C37.8528 65.3255 40.0101 65.1699 41.2417 63.7606L47.053 57.1108C48.2846 55.7014 48.1008 53.5768 47.0057 52.059C45.3881 49.8169 44.413 47.149 44.2244 44.3461C43.9592 40.4057 45.2702 36.5213 47.869 33.5475C50.4678 30.5737 54.1415 28.7541 58.0819 28.4889C60.8848 28.3003 63.6593 28.9091 66.0979 30.2117C67.7488 31.0935 69.8789 30.991 71.1105 29.5817L76.9217 22.9319Z" fill="#3F8CFF"/>
                                    <path d="M26.0778 81.1128C24.8462 82.5221 24.9809 84.6807 26.5181 85.7484C28.8687 87.3811 31.442 88.6781 34.1643 89.5969C37.9593 90.8777 41.9694 91.3986 45.9657 91.1296C49.962 90.8607 53.8661 89.8073 57.4553 88.0295C61.0445 86.2517 64.2483 83.7844 66.884 80.7684C69.5196 77.7525 71.5354 74.2469 72.8162 70.4519C74.0971 66.6569 74.6179 62.6468 74.3489 58.6505C74.08 54.6543 73.0266 50.7501 71.2488 47.1609C69.9736 44.5863 68.3435 42.2099 66.4106 40.0993C65.1465 38.719 62.9894 38.8747 61.7578 40.2841L55.9465 46.9339C54.7149 48.3432 54.8986 50.4678 55.9937 51.9856C56.4724 52.6491 56.8967 53.3525 57.2616 54.089C58.1295 55.8414 58.6438 57.7475 58.7751 59.6986C58.9064 61.6497 58.6522 63.6075 58.0268 65.4604C57.4015 67.3132 56.4173 69.0247 55.1305 70.4972C53.8437 71.9697 52.2795 73.1743 50.5272 74.0422C48.7749 74.9102 46.8687 75.4245 44.9176 75.5558C42.9665 75.6871 41.0087 75.4328 39.1559 74.8075C38.377 74.5446 37.6232 74.2184 36.9015 73.8329C35.2507 72.951 33.1206 73.0537 31.889 74.463L26.0778 81.1128Z" fill="#3F8CFF"/>
                                </svg>
                            </div>
                            <div className=''>
                                <h3 className='text-[#0A1629] text-[22px] font-semibold'>Sign In To Summary</h3>
                            </div>
                        </div>
                        
                        <form action="" onSubmit={handleLogin} className='w-full space-y-8'>
                            <Input name='email' labelStyle='text-[#7D8592]' type='email' value={loginData.email} placeholder='youremail@gmail.com' label='Email Address' handleInput={handleLoginInput}/>
                            <Password value={loginData.password} label='Password' handleInput={handleLoginInput} placeholder='password'/> 
                            <div className='flex items-center justify-between'>
                                <div className='text-[#7D8592] space-x-3'>
                                    <input type="checkbox" className='outline-none' id='remember'/>
                                    <label htmlFor="remember">Remember me</label>
                                </div>
                                <div>
                                    <Link to='#' className='text-[#7D8592]'>Forget Password?</Link>
                                </div>
                                
                            </div>
                            <Button disabled={loading} type='submit' className='px-10 py-3 bg-blue-700 text-white disabled:bg-blue-300 space-x-4'>
                                <span>Sign In</span>
                                <span>
                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7903 5.3871L15.7071 5.29289L10.7071 0.292893C10.3166 -0.0976311 9.68342 -0.0976311 9.29289 0.292893C8.93241 0.653377 8.90468 1.22061 9.2097 1.6129L9.29289 1.70711L12.585 5H1C0.447715 5 0 5.44772 0 6C0 6.51284 0.38604 6.93551 0.883379 6.99327L1 7H12.585L9.29289 10.2929C8.93241 10.6534 8.90468 11.2206 9.2097 11.6129L9.29289 11.7071C9.65338 12.0676 10.2206 12.0953 10.6129 11.7903L10.7071 11.7071L15.7071 6.70711C16.0676 6.34662 16.0953 5.77939 15.7903 5.3871Z" fill="white"/>
                                    </svg>

                                </span>
                            </Button>
                            <p className='text-center font-base'>Your summaries are emptied every 48 hours</p>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage