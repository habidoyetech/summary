
import Input from './Input';


const ContractTenderedForApprovalForm = ({summaryFormData, handleInputChange}) => {

  


  
  // function AddNewContract (id) {
  //   const contract = summaryFormData.contract.filter((contract) => contract.id === id)
    
  // }

  return (
    <div>
        <div>
            <h2>Contract Tendered For Approval</h2>
            <div className='w-full'>
                <div className='bg-white h-fit shadow-lg p-6 gap-6 shadow-[#C4CBD61A] w-full  rounded-xl'>
                    <div className='flex  w-full justify-between items-end'>
                      <div className='w-[40%]'>
                        <Input placeholder='Minute for lekki...' label='RFA for'/>
                      </div>
                      <div>
                        <button className='text-blue-600  space-x-2 flex  items-center'>
                          <span>
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.09218 6.66411C0.86892 6.66411 0.654801 6.57541 0.496929 6.41754C0.339058 6.25967 0.250366 6.04555 0.250366 5.82229C0.250366 5.59902 0.339058 5.3849 0.496929 5.22703C0.654801 5.06916 0.86892 4.98047 1.09218 4.98047H9.51037C9.73363 4.98047 9.94775 5.06916 10.1056 5.22703C10.2635 5.3849 10.3522 5.59902 10.3522 5.82229C10.3522 6.04555 10.2635 6.25967 10.1056 6.41754C9.94775 6.57541 9.73363 6.66411 9.51037 6.66411H1.09218Z" fill="#3F8CFF"/>
                            <path d="M4.45941 1.61281C4.45941 1.38955 4.5481 1.17543 4.70597 1.01756C4.86385 0.859688 5.07797 0.770996 5.30123 0.770996C5.52449 0.770996 5.73861 0.859688 5.89648 1.01756C6.05436 1.17543 6.14305 1.38955 6.14305 1.61281V10.031C6.14305 10.2543 6.05436 10.4684 5.89648 10.6263C5.73861 10.7841 5.52449 10.8728 5.30123 10.8728C5.07797 10.8728 4.86385 10.7841 4.70597 10.6263C4.5481 10.4684 4.45941 10.2543 4.45941 10.031V1.61281Z" fill="#3F8CFF"/>
                            </svg>
                          </span>
                          <span className='text-sm text-nowrap'>
                              Add Contract
                          </span>
                        </button>

                      </div>
                      
                    </div>
                    <div className='px-3 py-4'>
                      <hr className='border-gray-300'/>

                    </div>
                    <div>
                      {/* <div>
                        {
                          summaryFormData.contract.map((data, index) => {
                            return (
                              <div key={index} className=''>
                                <div className='flex gap-52'>
                                  <div className='space-y-4 flex-1'>
                                    <div className='flex space-x-6'>
                                      <Input label='User Department'/>
                                      <Input label='Rep'/>
                                    </div>
                                    
                                    <div>
                                      <Input label='Contract Description'/>
                                      <div>
                                        <Input label='Contract Summary'/>
                                        <Input label='Sub-Descrition'/>
                                      </div>

                                    </div>
                                    

                                  </div>
                                  <div className='flex-1 space-y-3'>
                                  <div className='w-24'>
                                    <Input label='Currency' type='number'/>

                                  </div>
                                  
                                  <div className='flex gap-2 items-center relative'>
                                    <input type='checkbox' className='mt-6 absolute -left-8'/>
                                    <div className='flex gap-8 items-center'>
                                      <Input type='text' label='Vendor'/>
                                      <Input type='text' label='Initial'/>
                                      <Input type='text' label='Final'/>

                                    </div>
                                    
                                    <div className='flex items-center pt-6'>
                                      <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M5.2984 11.6187C5.14053 11.7766 4.92641 11.8653 4.70314 11.8653C4.47988 11.8653 4.26576 11.7766 4.10789 11.6187C3.95002 11.4608 3.86133 11.2467 3.86133 11.0234C3.86133 10.8002 3.95002 10.5861 4.10789 10.4282L10.0604 4.47563C10.2183 4.31776 10.4324 4.22907 10.6557 4.22907C10.879 4.22907 11.0931 4.31776 11.251 4.47563C11.4088 4.6335 11.4975 4.84762 11.4975 5.07088C11.4975 5.29415 11.4088 5.50827 11.251 5.66614L5.2984 11.6187Z" fill="#F1B5B1"/>
                                      <path d="M4.10789 5.66606C3.95002 5.50818 3.86133 5.29406 3.86133 5.0708C3.86133 4.84754 3.95002 4.63342 4.10789 4.47555C4.26576 4.31767 4.47988 4.22898 4.70314 4.22898C4.92641 4.22898 5.14053 4.31767 5.2984 4.47555L11.251 10.4281C11.4088 10.586 11.4975 10.8001 11.4975 11.0234C11.4975 11.2466 11.4088 11.4607 11.251 11.6186C11.0931 11.7765 10.879 11.8652 10.6557 11.8652C10.4324 11.8652 10.2183 11.7765 10.0604 11.6186L4.10789 5.66606Z" fill="#F1B5B1"/>
                                      </svg>
                                    </div>
                                  </div>
                                  <button className='text-blue-600  space-x-2 flex  items-center'>
                                    <span>
                                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1.09218 6.66411C0.86892 6.66411 0.654801 6.57541 0.496929 6.41754C0.339058 6.25967 0.250366 6.04555 0.250366 5.82229C0.250366 5.59902 0.339058 5.3849 0.496929 5.22703C0.654801 5.06916 0.86892 4.98047 1.09218 4.98047H9.51037C9.73363 4.98047 9.94775 5.06916 10.1056 5.22703C10.2635 5.3849 10.3522 5.59902 10.3522 5.82229C10.3522 6.04555 10.2635 6.25967 10.1056 6.41754C9.94775 6.57541 9.73363 6.66411 9.51037 6.66411H1.09218Z" fill="#3F8CFF"/>
                                      <path d="M4.45941 1.61281C4.45941 1.38955 4.5481 1.17543 4.70597 1.01756C4.86385 0.859688 5.07797 0.770996 5.30123 0.770996C5.52449 0.770996 5.73861 0.859688 5.89648 1.01756C6.05436 1.17543 6.14305 1.38955 6.14305 1.61281V10.031C6.14305 10.2543 6.05436 10.4684 5.89648 10.6263C5.73861 10.7841 5.52449 10.8728 5.30123 10.8728C5.07797 10.8728 4.86385 10.7841 4.70597 10.6263C4.5481 10.4684 4.45941 10.2543 4.45941 10.031V1.61281Z" fill="#3F8CFF"/>
                                      </svg>
                                    </span>
                                    <span className='text-sm text-nowrap'>
                                        Add Vendor
                                    </span>
                                  </button>
                                  <div className='flex items-center'>
                                    <Input label='Resolution'/>
                                    <span className='pt-6'>
                                      <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.2984 11.6187C5.14053 11.7766 4.92641 11.8653 4.70314 11.8653C4.47988 11.8653 4.26576 11.7766 4.10789 11.6187C3.95002 11.4608 3.86133 11.2467 3.86133 11.0234C3.86133 10.8002 3.95002 10.5861 4.10789 10.4282L10.0604 4.47563C10.2183 4.31776 10.4324 4.22907 10.6557 4.22907C10.879 4.22907 11.0931 4.31776 11.251 4.47563C11.4088 4.6335 11.4975 4.84762 11.4975 5.07088C11.4975 5.29415 11.4088 5.50827 11.251 5.66614L5.2984 11.6187Z" fill="#F1B5B1"/>
                                        <path d="M4.10789 5.66606C3.95002 5.50818 3.86133 5.29406 3.86133 5.0708C3.86133 4.84754 3.95002 4.63342 4.10789 4.47555C4.26576 4.31767 4.47988 4.22898 4.70314 4.22898C4.92641 4.22898 5.14053 4.31767 5.2984 4.47555L11.251 10.4281C11.4088 10.586 11.4975 10.8001 11.4975 11.0234C11.4975 11.2466 11.4088 11.4607 11.251 11.6186C11.0931 11.7765 10.879 11.8652 10.6557 11.8652C10.4324 11.8652 10.2183 11.7765 10.0604 11.6186L4.10789 5.66606Z" fill="#F1B5B1"/>
                                      </svg>
                                    </span>

                                  </div>
                                  
                                </div>

                                </div>
                                
                                <div>
                                  <button className='text-blue-600  space-x-2 flex  items-center'>
                                      <span>
                                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.09218 6.66411C0.86892 6.66411 0.654801 6.57541 0.496929 6.41754C0.339058 6.25967 0.250366 6.04555 0.250366 5.82229C0.250366 5.59902 0.339058 5.3849 0.496929 5.22703C0.654801 5.06916 0.86892 4.98047 1.09218 4.98047H9.51037C9.73363 4.98047 9.94775 5.06916 10.1056 5.22703C10.2635 5.3849 10.3522 5.59902 10.3522 5.82229C10.3522 6.04555 10.2635 6.25967 10.1056 6.41754C9.94775 6.57541 9.73363 6.66411 9.51037 6.66411H1.09218Z" fill="#3F8CFF"/>
                                        <path d="M4.45941 1.61281C4.45941 1.38955 4.5481 1.17543 4.70597 1.01756C4.86385 0.859688 5.07797 0.770996 5.30123 0.770996C5.52449 0.770996 5.73861 0.859688 5.89648 1.01756C6.05436 1.17543 6.14305 1.38955 6.14305 1.61281V10.031C6.14305 10.2543 6.05436 10.4684 5.89648 10.6263C5.73861 10.7841 5.52449 10.8728 5.30123 10.8728C5.07797 10.8728 4.86385 10.7841 4.70597 10.6263C4.5481 10.4684 4.45941 10.2543 4.45941 10.031V1.61281Z" fill="#3F8CFF"/>
                                        </svg>
                                      </span>
                                      <span className='text-sm text-nowrap'>
                                          Add New Contract Description
                                      </span>
                                    </button>
                                </div>
                                <div>
                                  {data.contractDescription.map((contract, index) => {
                                    if (index > 0) {
                                      return (
                                        <div key={index}>
                                          This is me
  
                                        </div>
                                      )
                                    }    
                                  })}
                                </div>
                              </div>
                              

                            )
                          })
                        }
                        
                      </div> */}
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default ContractTenderedForApprovalForm