import React, {useState, forwardRef} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const DatePickerComponent = ({children}) => {
    const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    // <button className="example-custom-input" onClick={onClick} ref={ref}>
    //   {children}
    // </button>

    <div class="relative cursor-pointer w-full" onClick={onClick} >
      <label htmlFor="date" className='block text-[#7D8592] text-sm font-medium mb-2'>Date</label>
      <input datepicker type="text" name='date' value={value} ref={ref} class="py-3 px-4 block w-full border-[#D8E0F0] text-[#7D8592] outline-none border placeholder:text-[#7D8592] font-normal shadow-sm rounded-xl text-sm focus:border-[#D8E0F0] focus:ring-[#D8E0F0] disabled:opacity-50 disabled:pointer-events-none " placeholder="Select date"/>
      <div class="absolute flex items-center right-3 top-10  cursor-pointer">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3153 2.06336C14.2666 1.64393 13.9101 1.31836 13.4776 1.31836C13.0118 1.31836 12.6342 1.69594 12.6342 2.16171V3.00506H8.41749V2.16171L8.41182 2.06336C8.3631 1.64393 8.00664 1.31836 7.57414 1.31836C7.10837 1.31836 6.73079 1.69594 6.73079 2.16171V3.00506H6.39343C4.53034 3.00506 3.02002 4.51539 3.02002 6.37847V14.812C3.02002 16.6751 4.53034 18.1854 6.39343 18.1854H14.8269C16.69 18.1854 18.2003 16.6751 18.2003 14.812V6.37847C18.2003 4.51539 16.69 3.00506 14.8269 3.00506H14.321V2.16171L14.3153 2.06336ZM6.73079 4.69177V4.69168H6.39344C5.4619 4.69168 4.70674 5.44685 4.70674 6.37839V6.80014H16.5137V6.37839C16.5137 5.44685 15.7585 4.69168 14.827 4.69168H14.321V4.69177C14.321 5.15754 13.9434 5.53512 13.4776 5.53512C13.0451 5.53512 12.6886 5.20955 12.6399 4.79012L12.6342 4.69177V4.69168H8.41749V4.69177C8.41749 5.15754 8.03991 5.53512 7.57414 5.53512C7.14164 5.53512 6.78518 5.20955 6.73646 4.79012L6.73079 4.69177ZM16.5137 8.48685H4.70674V14.8119C4.70674 15.7434 5.4619 16.4986 6.39344 16.4986H14.827C15.7585 16.4986 16.5137 15.7434 16.5137 14.8119V8.48685Z" fill="#7D8592"/>
        </svg>
      </div>
    </div>

    
  ));
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    />
  )
}

export default DatePickerComponent