
import Input from './Input';
import DatePickerComponent from './DatePickerComponent';
import Attendees from './Attendees';
import { useState } from 'react';

const SummaryFirstForm = ({summaryFormData, handleInputChange, setSummaryFormData}) => {


  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // Access the file using event.target.files
    const file = event.target.file[0];
    setSelectedFile(file);
    console.log(selectedFile)
  };

  const handleTimeChange = event => {
    console.log(event.target.value)
  }



  return (
    <div className='w-full'>
        <h2 className='font-semibold text-xl pb-8'>Add Summary</h2>
        <div className='flex gap-6'>
            <div className='bg-white h-fit shadow-lg p-6 gap-6 shadow-[#C4CBD61A] w-[60%] flex rounded-xl'>
                <div className='w-[60%] space-y-6'>
                    <Input name='title' type='text' handleInput={handleInputChange} value={summaryFormData.summaryTitle} label='Summary Title' placeholder='Minutes for Lekki' />
                    <div className='flex w-full space-x-4'>
                      <div className=''>
                        
                        <div class="relative cursor-pointer w-full"  >
                          <label htmlFor="date" className='block text-[#7D8592] text-sm font-medium mb-2'>Date</label>
                          <input datepicker name='date' value={summaryFormData.date} type="datetime-local" onChange={handleInputChange} class="py-3 px-4 block w-full border-[#D8E0F0] text-[#7D8592] outline-none border placeholder:text-[#7D8592] font-normal shadow-sm rounded-xl text-sm focus:border-[#D8E0F0] focus:ring-[#D8E0F0] disabled:opacity-50 disabled:pointer-events-none " placeholder="Select date"/>
                          
                        </div>
                      </div>
                      
                      <div className='flex w-[38%] space-x-4'>
                        {/* <CustomTimeFormat/> */}
                        {/* <input type="time" id="appt" name="appt" /> */}
                        <div className="w-full relative">
                            <label htmlFor='start' className={`block text-sm  font-medium mb-2`}>Start</label>
                            <input  onChange={handleInputChange} value={summaryFormData.startTime} type='time' id='start' name='startTime' className="py-3 block w-full border-[#D8E0F0] text-[#7D8592] outline-none border placeholder:text-[#7D8592] font-normal shadow-sm rounded-xl text-sm focus:border-[#D8E0F0] focus:ring-[#D8E0F0] disabled:opacity-50 disabled:pointer-events-none" ></input>
                        </div>
                        <div className="w-full relative">
                            <label htmlFor='stop' className={`block text-sm  font-medium mb-2`}>Stop</label>
                            <input  onChange={handleInputChange} value={summaryFormData.endTime} type='time' id='stop' name='endTime' className="py-3 block w-full border-[#D8E0F0] text-[#7D8592] outline-none border placeholder:text-[#7D8592] font-normal shadow-sm rounded-xl text-sm focus:border-[#D8E0F0] focus:ring-[#D8E0F0] disabled:opacity-50 disabled:pointer-events-none" ></input>
                        </div>
                        {/* <Input name='start' type='time' value={summaryFormData.start} label="Start"/>
                        <Input name='end' type='time' value={summaryFormData.end} label="End"/> */}
                        
                      </div>

                    </div>
                    <div className='w-[50%]'>
                      <Input label='Meeting ID' disabled={true} value={summaryFormData.minuteId}/>
                    </div>
                    
                </div>
                <div className='w-[40%] space-y-6'>

                  <div class="flex items-center justify-center w-full">
                      <label for="dropzone-file" class=" w-full h-44 border border-[#CED5E0] rounded-3xl cursor-pointe">
                          <div class="flex relative flex-col h-full justify-between pt-3 pb-1">
                              <p className='text-[#0A1629] text-center w-full text-xs font-light'>Upload logo from your device</p>
                              <div className='relative left-[45%]'>
                                <svg width="41" height="33" viewBox="0 0 41 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.724044" y="0.421676" width="39.6375" height="31.6579" rx="8.01184" fill="white" fill-opacity="0.138167" stroke="#3F8CFF" stroke-width="0.843352" stroke-dasharray="5.06"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.9831 15.6655C28.477 14.3113 26.959 13.2956 25.2723 13.2956H24.2603C23.6699 11.2643 21.5616 9.77466 19.0315 9.50382C16.5015 9.30069 14.0557 10.3841 12.875 12.2123C11.863 13.905 11.6394 16.6945 13.5433 18.319C14.0615 18.487 14.7346 18.6245 15.5083 18.7337C15.557 18.5106 15.6752 18.2914 15.8655 18.0956L15.9715 18.0012L19.3449 15.2928C19.948 14.8085 20.9038 14.7634 21.5722 15.1807L21.6127 15.2077L21.7303 15.2928L25.1037 18.0012C25.4097 18.2469 25.5736 18.5636 25.5952 18.8853C26.9609 18.7565 27.9972 18.5636 28.3944 18.319C29.2361 17.8228 29.2361 16.6135 28.9831 15.6655ZM23.8529 19.6343C24.0877 19.6472 24.3279 19.5816 24.5074 19.4375C24.8367 19.1731 24.8367 18.7444 24.5074 18.48L21.134 15.7715L21.0545 15.7152C20.7237 15.5087 20.2453 15.5274 19.9413 15.7715L16.5679 18.48L16.4977 18.5438C16.4129 18.6314 16.3586 18.7319 16.3348 18.836C16.3365 18.8361 16.3382 18.8363 16.3399 18.8365C16.2917 19.048 16.3694 19.2743 16.5731 19.4378L16.6525 19.4942C16.7866 19.5779 16.945 19.6246 17.1061 19.6343C17.3409 19.6472 17.5811 19.5816 17.7606 19.4375L19.6943 17.8855V19.048C19.696 19.048 19.6978 19.0481 19.6995 19.0481V22.3443L19.7052 22.4233C19.7537 22.7587 20.1076 23.0194 20.5379 23.0214C21.0035 23.0213 21.381 22.7182 21.381 22.3443V17.8855L22.8266 19.0458C22.8282 19.0458 22.8298 19.0457 22.8314 19.0457L23.3199 19.4378L23.3993 19.4942C23.5334 19.5779 23.6918 19.6246 23.8529 19.6343Z" fill="#3F8CFF"/>
                                </svg>

                              </div>
                              <div className='relative flex bottom-0 left-4'>
                                <div className='p-3 rounded-2xl bg-[#6D5DD319]'>
                                  <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8537 1.3156C12.5012 -0.17356 15.1723 -0.17356 16.8198 1.3156C18.4173 2.75964 18.4657 5.0737 16.9647 6.57073L16.8194 6.70863L9.06094 13.714C8.07252 14.6074 6.46999 14.6074 5.48157 13.714C4.53269 12.8563 4.49474 11.487 5.36802 10.5881L5.48192 10.4782L12.642 4.01386C12.9715 3.71633 13.5055 3.71662 13.8347 4.01449C14.1385 4.28945 14.1616 4.72187 13.9042 5.02078L13.834 5.09256L6.67425 11.5566C6.34454 11.8547 6.34454 12.3379 6.67425 12.6359C6.9786 12.911 7.45751 12.9322 7.78897 12.6991L7.86858 12.6356L15.6271 5.63027C16.6159 4.73651 16.6159 3.28743 15.6271 2.39367C14.6779 1.53566 13.1624 1.50134 12.1679 2.29071L12.0464 2.39367L4.296 9.39929C2.64815 10.8888 2.64815 13.3037 4.296 14.7932C5.89391 16.2376 8.45455 16.2813 10.1108 14.9245L10.2634 14.7932L18.0138 7.7876C18.3431 7.4899 18.8771 7.4899 19.2065 7.7876C19.5105 8.0624 19.5339 8.49481 19.2766 8.79386L19.2065 8.86567L11.4561 15.8713C9.14951 17.9562 5.40986 17.9562 3.10332 15.8713C0.849199 13.8338 0.797969 10.5591 2.94963 8.46535L3.10332 8.32122L10.8537 1.3156Z" fill="#6D5DD3"/>
                                  </svg>

                                </div>

                              </div>
                              
                          </div>
                          <input id="dropzone-file" type="file" class="hidden" name='logoName' onChange={handleFileChange} />
                      </label>
                  </div> 
                  <Input type='text' handleInput={handleInputChange} placeholder='Logo Name' name="logoName" value={summaryFormData.logoName} />

                  
                </div>
            </div>
            <div className='bg-white shadow-lg p-6 gap-6 shadow-[#C4CBD61A] w-[40%] rounded-xl'>
              <Attendees summaryFormData={summaryFormData} setSummaryFormData={setSummaryFormData}/>
            </div>
        </div>
        

    </div>
  )
}

export default SummaryFirstForm