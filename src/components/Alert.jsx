import React, {useEffect} from 'react';
import {motion} from 'framer-motion'

const Alert = ({message, setAlertIsOpen, error, setError, alertIsOpen}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
          setAlertIsOpen(false);
          setError(false)
        }, 2000); // Adjust the duration as needed (in milliseconds)
    
        return () => clearTimeout(timer);
    }, []);

  return (
    <div className='fixed top-4 right-0'>
        <motion.div  animate={{ x: 0 }} initial={{x: 300, transition:{duration: 1}}} >
            {error ?
                <div className="bg-red-50 border-s-4 border-red-500 p-4 dark:bg-red-800/30" role="alert">
                    <div className="flex">
                        <div className="flex-shrink-0">
                        
                        <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800">
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </span>
                        
                        </div>
                        <div className="ms-3">
                        <h3 className="text-gray-800 font-semibold dark:text-white">
                            {message}
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-400">
                            Your have {message.toLowerCase()}.
                        </p>
                        </div>
                        <div className="ps-3 ms-auto">
                            <div className="-mx-1.5 -my-1.5">
                                <button type="button" onClick={()=> {setAlertIsOpen(false); setError(false)}} className="inline-flex bg-red-50 rounded-lg p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600 " data-hs-remove-element="#dismiss-alert">
                                <span className="sr-only">Dismiss</span>
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>:
                <div className="bg-teal-50 border-t-2 border-teal-500 rounded-lg p-4" role="alert">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-teal-100 bg-teal-200 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400">
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                            </span>
                        
                        </div>
                        <div className="ms-3">
                            <h3 className="text-gray-800 font-semibold dark:text-white">
                                {message}
                            </h3>
                            <p className="text-sm text-gray-700 dark:text-gray-400">
                                You have {message}
                            </p>
                        </div>
                        <div className="ps-3 ms-auto">
                            <div className="-mx-1.5 -my-1.5">
                                <button typeName="button" onClick={()=> setAlertIsOpen(false)} class="inline-flex bg-teal-50 rounded-lg p-1.5 text-teal-500 hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-50 focus:ring-teal-600 dark:bg-transparent dark:hover:bg-teal-800/50 dark:text-teal-600" data-hs-remove-element="#dismiss-alert">
                                <span className="sr-only">Dismiss</span>
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
           
            
        </motion.div>
    </div>

    
  )
}

export default Alert