import React from 'react'
import SummaryFirstForm from './SummaryFirstForm';

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
                    <div>
                        This is me
                    </div>
                </>
            )
    
        default:
            break;
    }
}

export default AddSummaryForm