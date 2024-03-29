import { useState } from "react";



const Password = ({label, value, handleInput, placeholder}) => {

    const [inputType, setInputType] = useState({type: 'password', status: true });

    const changePasswordInputType = (e) => {
        e.preventDefault()
        inputType.type === 'text'? setInputType({type: 'password', status: true }): setInputType({type: 'text', status: false })
    }

  return (
    <div className="relative">
        <label for='password' className="block text-[#7D8592] text-sm font-medium mb-2">{label}</label>
        <input onChange={handleInput} type={inputType.type} id='password' name='password' value={value} className="py-3 px-4 block w-full border-[#D8E0F0] text-[#7D8592] outline-none border placeholder:text-[#7D8592] font-normal shadow-sm rounded-xl text-sm focus:border-[#D8E0F0] focus:ring-[#D8E0F0] disabled:opacity-50 disabled:pointer-events-none"  placeholder={placeholder}></input>
        <div className='absolute bottom-1 right-3 z-10'>
          <button className='focus:outline-none text-brand-primary transition-all' onClick={(e) => {changePasswordInputType(e)}}>
            {
                inputType.status 
                ? 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C8.6202 3 5.66131 4.63249 3.14546 7.31606C2.28113 8.23802 1.5305 9.22245 0.894336 10.2075L0.655978 10.5849C0.398798 11.0018 0.214904 11.3341 0.105573 11.5528C-0.0351909 11.8343 -0.0351909 12.1657 0.105573 12.4472L0.217516 12.6618C0.36935 12.943 0.595382 13.3296 0.894336 13.7925C1.5305 14.7776 2.28113 15.762 3.14546 16.6839C5.66131 19.3675 8.6202 21 12 21C15.3798 21 18.3387 19.3675 20.8545 16.6839C21.7189 15.762 22.4695 14.7776 23.1057 13.7925L23.344 13.4151C23.6012 12.9982 23.7851 12.6659 23.8944 12.4472C24.0352 12.1657 24.0352 11.8343 23.8944 11.5528L23.7825 11.3382C23.6306 11.057 23.4046 10.6704 23.1057 10.2075C22.4695 9.22245 21.7189 8.23802 20.8545 7.31606C18.3387 4.63249 15.3798 3 12 3ZM12 5C14.7452 5 17.2238 6.36751 19.3955 8.68394C20.1718 9.51198 20.8508 10.4026 21.4256 11.2925L21.5707 11.5209L21.7054 11.7399L21.858 12L21.7054 12.2601C21.6191 12.4028 21.5259 12.5522 21.4256 12.7075C20.8508 13.5974 20.1718 14.488 19.3955 15.3161C17.2238 17.6325 14.7452 19 12 19C9.2548 19 6.77619 17.6325 4.60454 15.3161C3.82825 14.488 3.14919 13.5974 2.57441 12.7075L2.42925 12.4791L2.29461 12.2601L2.141 12L2.29461 11.7399C2.38085 11.5972 2.47415 11.4478 2.57441 11.2925C3.14919 10.4026 3.82825 9.51198 4.60454 8.68394C6.77619 6.36751 9.2548 5 12 5ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z" fill="#7D8592"/>
                </svg>              
                :   
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>

            }
          </button>
        </div>
        
    </div>
  )
}

export default Password