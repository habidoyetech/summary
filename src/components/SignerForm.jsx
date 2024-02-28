import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Input from './Input';
import Button from './Button';

export default function SignerForm({closeModal, openModal, isOpen}) {

    const [signerData, setSignerData] = useState({
        
    })
  

  
  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button 
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={openModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full w-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-[70%] px-20 space-y-8 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg  flex itemx-baseline justify-between items-center font-medium leading-6 text-gray-900"
                  >
                    <div className=''>Signer</div>
                    <div className="p-2 bg-[#F4F9FD] rounded-xl" onClick={closeModal}>
                        <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9459 4.1865C23.4751 3.8014 22.7385 3.80071 22.2667 4.18492L15.2891 9.86792L8.31145 4.18492C7.8397 3.80071 7.10303 3.8014 6.63226 4.1865L6.41179 4.36684C5.90136 4.78439 5.90224 5.487 6.41373 5.90358L13.2851 11.5001L6.41373 17.0965C5.90224 17.5131 5.90136 18.2157 6.4118 18.6333L6.63226 18.8136C7.10303 19.1987 7.83971 19.1994 8.31145 18.8152L15.2891 13.1322L22.2667 18.8152C22.7385 19.1994 23.4751 19.1987 23.9459 18.8136L24.1664 18.6333C24.6768 18.2157 24.6759 17.5131 24.1644 17.0965L17.293 11.5001L24.1644 5.90358C24.6759 5.487 24.6768 4.78439 24.1664 4.36684L23.9459 4.1865Z" fill="#0A1629"/>
                        </svg>
                    </div>
                  </Dialog.Title>
                  <div className="mt-2 space-y-6 w-full">
                    <div className='w-[45%]'>
                        <Input type='text' label='MOM Prepared by'/>
                    </div>
                    <div className='flex w-full space-x-8'>
                        <div className='w-[50%]'>
                            <Input type="text" label="MOM Received by"/>
                        </div >
                        <div className='w-[20%]'>
                            <Input type="text" label="Role"/>
                        </div>
                        <div className='w-[30%]'>
                            <Input type="text" label="Email Address"/>
                        </div>
                    </div>
                    <div className='w-full pt-8 space-y-6'>
                        <h3 className='mb-8'>Jointly Approved</h3>
                        <div className='flex gap-2 w-full items-center relative'>
                            <div className='flex items-center justify-center' >
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.2984 11.6187C5.14053 11.7766 4.92641 11.8653 4.70314 11.8653C4.47988 11.8653 4.26576 11.7766 4.10789 11.6187C3.95002 11.4608 3.86133 11.2467 3.86133 11.0234C3.86133 10.8002 3.95002 10.5861 4.10789 10.4282L10.0604 4.47563C10.2183 4.31776 10.4324 4.22907 10.6557 4.22907C10.879 4.22907 11.0931 4.31776 11.251 4.47563C11.4088 4.6335 11.4975 4.84762 11.4975 5.07088C11.4975 5.29415 11.4088 5.50827 11.251 5.66614L5.2984 11.6187Z" fill="#F1B5B1"/>
                                <path d="M4.10789 5.66606C3.95002 5.50818 3.86133 5.29406 3.86133 5.0708C3.86133 4.84754 3.95002 4.63342 4.10789 4.47555C4.26576 4.31767 4.47988 4.22898 4.70314 4.22898C4.92641 4.22898 5.14053 4.31767 5.2984 4.47555L11.251 10.4281C11.4088 10.586 11.4975 10.8001 11.4975 11.0234C11.4975 11.2466 11.4088 11.4607 11.251 11.6186C11.0931 11.7765 10.879 11.8652 10.6557 11.8652C10.4324 11.8652 10.2183 11.7765 10.0604 11.6186L4.10789 5.66606Z" fill="#F1B5B1"/>
                                </svg>
                            </div>
                            <div className='flex gap-8 items-center w-full'>
                                <Input type='text' placeholder='Signer'  name="companyName" />
                                <Input type='text' placeholder='Role'   name="initial" />
                                <Input type='email' placeholder='Email'  name="last" />
                            </div>
                            
                            
                        </div>
                        <div>
                            <button  type='button' className='text-blue-600  space-x-2 flex  items-center'>
                                <span>
                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.09218 6.66411C0.86892 6.66411 0.654801 6.57541 0.496929 6.41754C0.339058 6.25967 0.250366 6.04555 0.250366 5.82229C0.250366 5.59902 0.339058 5.3849 0.496929 5.22703C0.654801 5.06916 0.86892 4.98047 1.09218 4.98047H9.51037C9.73363 4.98047 9.94775 5.06916 10.1056 5.22703C10.2635 5.3849 10.3522 5.59902 10.3522 5.82229C10.3522 6.04555 10.2635 6.25967 10.1056 6.41754C9.94775 6.57541 9.73363 6.66411 9.51037 6.66411H1.09218Z" fill="#3F8CFF"/>
                                    <path d="M4.45941 1.61281C4.45941 1.38955 4.5481 1.17543 4.70597 1.01756C4.86385 0.859688 5.07797 0.770996 5.30123 0.770996C5.52449 0.770996 5.73861 0.859688 5.89648 1.01756C6.05436 1.17543 6.14305 1.38955 6.14305 1.61281V10.031C6.14305 10.2543 6.05436 10.4684 5.89648 10.6263C5.73861 10.7841 5.52449 10.8728 5.30123 10.8728C5.07797 10.8728 4.86385 10.7841 4.70597 10.6263C4.5481 10.4684 4.45941 10.2543 4.45941 10.031V1.61281Z" fill="#3F8CFF"/>
                                    </svg>
                                </span>
                                <span className='text-sm text-nowrap'>
                                    Add Signer
                                </span>
                            </button>
                        </div>
                    </div>
                  </div>
                  <div className='mt-16'>
                        <div className='px-6 py-4 rounded-lg bg-[#F4F9FD] flex items-center justify-between'>
                            <span className='text-sm font-base'>Save Signers</span>

                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox"  class="sr-only peer"/>
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none outline-none  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] peer-checked:outline-none after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                            </label>


                        </div>
                    </div>

                  <div className="mt-8">
                    {/* <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button> */}
                    <Button  type='submit' className='px-16 py-3 disabled:bg-blue-300 text-white bg-blue-600'>
                        <span className='text-[16px] font-medium'>Send Summary</span>
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
