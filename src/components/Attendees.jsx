import React, { useState } from 'react'
import Input from './Input'
import { v4 as uuidv4 } from 'uuid';

const Attendees = ({summaryFormData, setSummaryFormData}) => {

    

    const [attendes, setAttendes] = useState([
        ...summaryFormData.attendees
    ])

    // const [newAttendeesName, setNewAttendeesName] = useState('')

    // const [newAttendessRole, setNewAttendeesRole] = useState('')

    const uuid = uuidv4()

    function AddNewAttende () {
        setAttendes((prev) => [...prev, {id: uuid, name: '', role:''}])
    }

    function handleAttendeeInputChange (e, id) {
        const updatedAttendees = attendes.map(attendee => {
            if (attendee.id === id) {
                return {...attendee, [e.target.name]: e.target.value}
            }
            return attendee
        })

        setAttendes(updatedAttendees)
        setSummaryFormData({...summaryFormData, attendees: [...updatedAttendees]})

        console.log(attendes)
        console.log(summaryFormData)
    }

    function removeAttende(id) {
        const newAttendes = attendes.filter((attende) => attende.id !== id)
        setAttendes(newAttendes)
        console.log(newAttendes)
    }

  return (
    <div className='w-[90%]'>

        <div className='space-x-1'>
            <span className='text-lg font-semibold'>Attendes</span>
            <span className='text-xs text-[#7D8592]'>
                /
            </span>
            <span className='text-xs text-[#7D8592]'>{attendes.length }</span>

        </div>
        {
            attendes.map((attende) => {
                return (
                    <div key={attende.id}  className='flex space-x-4 w-full items-center'>
                        <div onClick={()=> removeAttende(attende.id)} className='flex items-center cursor-pointer'>
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.2984 11.6187C5.14053 11.7766 4.92641 11.8653 4.70314 11.8653C4.47988 11.8653 4.26576 11.7766 4.10789 11.6187C3.95002 11.4608 3.86133 11.2467 3.86133 11.0234C3.86133 10.8002 3.95002 10.5861 4.10789 10.4282L10.0604 4.47563C10.2183 4.31776 10.4324 4.22907 10.6557 4.22907C10.879 4.22907 11.0931 4.31776 11.251 4.47563C11.4088 4.6335 11.4975 4.84762 11.4975 5.07088C11.4975 5.29415 11.4088 5.50827 11.251 5.66614L5.2984 11.6187Z" fill="#F1B5B1"/>
                            <path d="M4.10789 5.66606C3.95002 5.50818 3.86133 5.29406 3.86133 5.0708C3.86133 4.84754 3.95002 4.63342 4.10789 4.47555C4.26576 4.31767 4.47988 4.22898 4.70314 4.22898C4.92641 4.22898 5.14053 4.31767 5.2984 4.47555L11.251 10.4281C11.4088 10.586 11.4975 10.8001 11.4975 11.0234C11.4975 11.2466 11.4088 11.4607 11.251 11.6186C11.0931 11.7765 10.879 11.8652 10.6557 11.8652C10.4324 11.8652 10.2183 11.7765 10.0604 11.6186L4.10789 5.66606Z" fill="#F1B5B1"/>
                            </svg>

                        </div>
                        <div className='w-[90%]'>
                            <Input  type='text' name='name' value={attende.name} handleInput={(e) => handleAttendeeInputChange(e, attende.id)} placeholder={`Attende ${attendes.indexOf(attende) + 1}`}/>
                        </div>
                        <div>
                            <Input  name='role' value={attende.role} handleInput={(e) => handleAttendeeInputChange(e, attende.id)} type='text' placeholder='role'/>
                        </div>
                    </div>

                )
                

            })
        }
        <div className='mt-6'>
            <button type='button' onClick={AddNewAttende} className='flex text-sm text-blue-600 items-center space-x-2 cursor-pointer'>
                <span>
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.09218 6.66411C0.86892 6.66411 0.654801 6.57541 0.496929 6.41754C0.339058 6.25967 0.250366 6.04555 0.250366 5.82229C0.250366 5.59902 0.339058 5.3849 0.496929 5.22703C0.654801 5.06916 0.86892 4.98047 1.09218 4.98047H9.51037C9.73363 4.98047 9.94775 5.06916 10.1056 5.22703C10.2635 5.3849 10.3522 5.59902 10.3522 5.82229C10.3522 6.04555 10.2635 6.25967 10.1056 6.41754C9.94775 6.57541 9.73363 6.66411 9.51037 6.66411H1.09218Z" fill="#3F8CFF"/>
                    <path d="M4.45941 1.61281C4.45941 1.38955 4.5481 1.17543 4.70597 1.01756C4.86385 0.859688 5.07797 0.770996 5.30123 0.770996C5.52449 0.770996 5.73861 0.859688 5.89648 1.01756C6.05436 1.17543 6.14305 1.38955 6.14305 1.61281V10.031C6.14305 10.2543 6.05436 10.4684 5.89648 10.6263C5.73861 10.7841 5.52449 10.8728 5.30123 10.8728C5.07797 10.8728 4.86385 10.7841 4.70597 10.6263C4.5481 10.4684 4.45941 10.2543 4.45941 10.031V1.61281Z" fill="#3F8CFF"/>
                    </svg>
                </span>
                <span>
                    Add Attendee
                </span>

            </button>
            
        </div>
        <div className='mt-16'>
            <div className='px-6 py-4 rounded-lg bg-[#F4F9FD] flex items-center justify-between'>
                <span className='text-sm font-base'>Save Attendees</span>

                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox"  class="sr-only peer"/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none outline-none  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] peer-checked:outline-none after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>


            </div>
        </div>
        
    </div>
  )
}

export default Attendees