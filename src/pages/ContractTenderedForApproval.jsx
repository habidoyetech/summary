import React, { useEffect, useState, Fragment } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import ContractTenderedForApprovalForm from '../components/ContractTenderedForApprovalForm'
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import SignerForm from '../components/SignerForm';




const ContractTenderedForApproval = () => {

    const uuid = uuidv4();
    const params = useParams();

    let [isOpen, setIsOpen] = useState(true)

    const [contracts, setContract] = useState(
        
          [
              {
                id: uuid,
                summaryId: params.summaryId,
                projectName: "",
                userDept: "string",
                repName: "string",
                contractDescription: "string",
                contractSummary: "string",
                subheading: "string",
                vendors: [
                  {
                    id: uuid,
                    companyName: "string",
                    initial: 10,
                    last: 10
                  }
                ],
                currency: "string",
                mtcResolution: "string"
              }
            ]
          
    )

    const newContract = 
      {
        id: uuid,
        summaryId: params.summaryId,
        projectName: "",
        userDept: "",
        repName: "",
        contractDescription: "",
        contractSummary: "",
        subheading: "",
        vendors: [
          {
            id: uuid,
            companyName: "",
            initial: 0,
            last: 0
          }
        ],
        currency: "",
        mtcResolution: ""
      }
    

    useEffect(() => {
        const token = localStorage.getItem('token')

    })

    function AddNewContract (e) {
      e.preventDefault()
      setContract((prev) => [...prev, newContract])
    }

    function handleContractInputChange (e, id, vendorId) {
        const updatedContract = contracts.map(contract => {
            if (contract.id === id) {
              
              if (vendorId) {
                const updatedVendor = contract.vendors.map(vendor => {
                  if(vendor.id === vendorId) {
                    return {...vendor, [e.target.name]: e.target.value }
                  }
                  return vendor
                })
                return {...contract, vendors: updatedVendor}
              }
              if (!vendorId) {
                return {...contract, [e.target.name]: e.target.value}

              }
            }
            return contract
        })

        setContract(updatedContract)
        console.log(contracts)
    }

    function handleRFAInputChange (e) {
      const updatedContract = contracts.map(contract => {
        return {...contract, [e.target.name]: e.target.value}
      })
      setContract(updatedContract)
      console.log(contracts)
    }

    function AddVendor (e, id) {
      e.preventDefault()
      const updatedContract = contracts.map(contract => {
        if (contract.id === id) {
          const newVendor = {
            id: uuid,
            companyName: "",
            initial: 0,
            last: 0
          }
          const updatedVendor = [...contract.vendors, newVendor]
          return {...contract, vendors: updatedVendor}
        }
        return contract
      })
      setContract(updatedContract)
    }

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
  

    function removeVendor (e, contractId, vendorId) {
      const updatedContract = contracts.map(contract => {
        if (contract.id === contractId) {
            const updatedVendor = contract.vendors.filter(vendor => vendor.id !== vendorId)
            return {...contract, vendors: updatedVendor}
          
        }
        return contract
      })
      setContract(updatedContract)
    }

    

  return (
    <Layout>
        <div>
            <form action="">
                <ContractTenderedForApprovalForm contractsData={contracts} handleInputChange={handleContractInputChange} handleRFAInputChange={handleRFAInputChange} AddVendor={AddVendor} AddContract={AddNewContract} removeVendor={removeVendor}/>
                <SignerForm closeModal={closeModal} isOpen={isOpen}/>
                <div className='flex justify-end mt-20'>
                    <div className='flex space-x-4'>
                        <Button type='button' onClick={() => {}}  className='px-11 py-3 text-[#7D8594] bg-[#F4F9FD]'>
                            <span className='text-[16px] font-medium'>Back</span>
                        </Button>
                        <Button type='button' onClick={openModal} className='px-16 py-3 text-white bg-blue-600'>
                            <span className='text-[16px] font-medium'>Proceed</span>
                        </Button>
                    </div>   
                </div>
            </form>
        </div>
    </Layout>
  )
}

export default ContractTenderedForApproval