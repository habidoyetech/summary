import React, { useState } from 'react';
import Layout from '../components/Layout';
import AddSummaryForm from '../components/AddSummaryForm';
import Button from '../components/Button';
// import 'flowbite'

const AddSummary = () => {

    const [step, setStep] = useState(1)
    const [summaryFormData, setSummaryFormData] = useState({
        summaryTitle: "",
        start: "",
        end: "",
    })

    const handleInputChange = (e) => {
        setSummaryFormData((prev) => ({...prev, [e.target.name]:e.target.value}))
    }

    

  return (
    <Layout>
        <div>
            <form action="">
                <AddSummaryForm step={step} summaryFormData={summaryFormData} handleInputChange={handleInputChange}/>

                <div className='flex justify-end mt-20'>
                    <div className='flex space-x-4'>
                        <Button type='button' onClick={() => setStep(prev => prev - 1)}  className='px-11 py-3 text-[#7D8594] bg-[#F4F9FD]'>
                            <span className='text-[16px] font-medium'>Back</span>
                        </Button>
                        <Button type='button' onClick={() => setStep(prev => prev + 1)} className='px-16 py-3 text-white bg-blue-600'>
                            <span className='text-[16px] font-medium'>Proceed</span>
                        </Button>

                    </div>
                    
                </div>
                
            </form>
        </div>
    </Layout>
  )
}

export default AddSummary