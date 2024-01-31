import React from 'react'

const StepperControl = ({ handleClick, currentStep, steps, isFormValid }) => {
  const isLastStep = currentStep === steps.length;

  return (
    <div className='container flex justify-around mt-4 mb-8'>
        {/* Back button */}
         <button 
         onClick={() => handleClick()}
         
         className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>Back</button>

        {/* Next button */}
        <button 
        onClick={() => handleClick('next')}
        className={`${
          isFormValid ? 'bg-green-500 hover:bg-slate-700' : 'bg-gray-300 cursor-not-allowed'
        } text-white uppercase py-2 px-4 rounded-xl font-semibold transition duration-200 ease-in-out`}
        disabled={!isFormValid}
        >
            {isLastStep ? 'Confirm' : 'Next'}
        </button>

    </div>
  )
}

export default StepperControl