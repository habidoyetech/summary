import React, { useState } from 'react';
import Layout from '../components/Layout';
// import AddSummaryForm from '../components/AddSummaryForm';
import Button from '../components/Button';
import SummaryFirstForm from '../components/SummaryFirstForm';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';




const AddSummary = () => {

    const uuid = uuidv4()

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const [summaryFormData, setSummaryFormData] = useState(
        {
            title: "",
            startTime: "",
            endTime: "",
            meetingNo: uuid,
            date: "",
            minuteId: uuid,
            logoName: "",
            attendees: [
              {
                id: uuid,
                name: "",
                role: ""
              }
            ]
        }
    )
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [alertIsOpen, setAlertIsOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    

    

    const handleInputChange = (e) => {
        setSummaryFormData((prev) => ({...prev, [e.target.name]:e.target.value}))
        console.log(summaryFormData)
    }

    const handleSubmitSummary = async e => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await fetch('https://summary-be.vercel.app/api/v1/summaries', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(summaryFormData)
            });

            const data =  await response.json()
            if (response.ok) {
                console.log(data)
                setMessage("Summary Added Succesfully")
                setLoading(false)
                setAlertIsOpen(true)
                navigate(`/${data.id}/contract-tendered-for-approval`)
            } 

            if (!response.ok) {
                console.log(data)
                setMessage(data.message)
                setError(true)
                setLoading(false)
                setAlertIsOpen(true)
            }
        } catch (error) {
            console.log(error)
            
        }

    }

    

  return (
    <Layout>
        <div className='relative'>
            {alertIsOpen && <Alert message={message} setError={setError} error={error} setAlertIsOpen={setAlertIsOpen}/>}

            <form action="" onSubmit={handleSubmitSummary}>
                <SummaryFirstForm summaryFormData={summaryFormData} handleInputChange={handleInputChange} setSummaryFormData={setSummaryFormData}/>
                <div className='flex justify-end mt-20'>
                    <div className='flex space-x-4'>
                        <Button type='button' onClick={() => {}}  className='px-11 py-3 text-[#7D8594] bg-[#F4F9FD]'>
                            <span className='text-[16px] font-medium'>Back</span>
                        </Button>
                        <Button disabled={loading} type='submit' className='px-16 py-3 disabled:bg-blue-300 text-white bg-blue-600'>
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