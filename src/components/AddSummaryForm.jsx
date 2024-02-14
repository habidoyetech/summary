import React from 'react'
import SummaryFirstForm from './SummaryFirstForm';
import ContractTenderedForApprovalForm from './ContractTenderedForApprovalForm';


const AddSummaryForm = ({step, summaryFormData, handleInputChange}) => {
  
    switch (step) {
        case 1:
            
            return (
                <>
                    <SummaryFirstForm summaryFormData={summaryFormData} handleInputChange={handleInputChange}/>
                </>
            )
        
        case 2:
            return (
                <>
                    <ContractTenderedForApprovalForm summaryFormData={summaryFormData} handleInputChange={handleInputChange} />
                </>
            )
    
        default:
            break;
    }
}

export default AddSummaryForm