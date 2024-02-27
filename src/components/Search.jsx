import React from 'react'

const Search = () => {
  return (
    <div>
        <div className='bg-white flex items-center px-6 space-x-4 py-3 rounded-xl'>
            <label htmlFor="search" >
                <span>
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8798 3.72412C7.9092 3.72412 3.87976 7.77682 3.87976 12.7761C3.87976 17.7753 7.9092 21.828 12.8798 21.828C14.981 21.828 16.9141 21.1037 18.4457 19.8899L18.8728 20.3096L22.1899 23.646L22.2896 23.7346C22.705 24.0594 23.3056 24.0299 23.6873 23.646C24.1008 23.2301 24.1008 22.5558 23.6873 22.1399L20.3615 18.7949L19.9443 18.3849C21.1563 16.8428 21.8798 14.8944 21.8798 12.7761C21.8798 7.77682 17.8503 3.72412 12.8798 3.72412ZM12.8798 5.85399C16.6808 5.85399 19.7621 8.95311 19.7621 12.7761C19.7621 16.599 16.6808 19.6981 12.8798 19.6981C9.07874 19.6981 5.99741 16.599 5.99741 12.7761C5.99741 8.95311 9.07874 5.85399 12.8798 5.85399Z" fill="#0A1629"/>
                    </svg>

                </span>
            </label>
            <input type="text" id='search' placeholder='Search' className='w-full h-full outline-none border-none focus:border-none focus:outline-none' />
        </div>
        
    </div>
  )
}

export default Search