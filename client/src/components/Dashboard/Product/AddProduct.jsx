import React, { useState } from 'react';
// Packages:
import classNames from 'classnames';
import { HiOutlinePlusCircle } from 'react-icons/hi'
// Components:
import CustomStepper from '../CustomStepper';
import ProductInfo from '../Widgets/ProductInfo';
import ProductPrice from '../Widgets/ProductPrice';
import ProductMedia from '../Widgets/ProductMedia';


const AddProduct = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [animate, setAnimate] = useState(false);

  // _____________________________________________________________________
  // An array of objects representing the steps of the Add Product process
  const steps = [
    { title: '1. Product Info', onClick: () => setStep(0) },
    { title: '2. Media', onClick: () => setStep(1) },
    { title: '3. Pricing', onClick: () => setStep(2) },
    { title: 'Confirmation', onClick: () => setStep(3) },
  ];
  // _____________________________________________________________________
  // Function to set the active step
  const setStep = (step) => {
    if (step !== activeStep) {
      setAnimate(true);
      setTimeout(() => {
        setActiveStep(step);
        setAnimate(false);
      }, 300); // Match this duration with your CSS transition
    }
  };
  // _____________________________________________________________________
  // Function to render the component for the current active step
  const getSectionComponent = (activeStep) => {
    switch (activeStep) {
      case 0: return <ProductInfo />;
      case 1: return <ProductMedia />;
      case 2: return <ProductPrice />;
      case 3: return <Confirmation />;
      default: return null;
    }
  };
  // _____________________________________________________________________

  return (
    <div className='container mx-auto w-2/3'>
      <CustomStepper steps={steps} activeStep={activeStep} />
      <section className="max-w-full  p-6 mx-auto bg-white rounded-md shadow-lg mt-4 mb-10 h-auto flex flex-col justify-between">
        <form className={classNames('transition-container', { 'animate-fade': animate })}>
          {getSectionComponent(activeStep)}
        </form>
        <div className={`w-full mt-4 flex ${activeStep === 0 || activeStep === steps.length - 1 ? 'justify-end' : 'justify-between'} `}>
          {activeStep !== 0 && activeStep !== steps.length - 1 && (
            <button
              className="middle none center rounded-lg bg-[#d9dee4] py-3 px-6 font-sans text-xs font-bold uppercase text-[#344767] shadow-md shadow-[#d9dee4]/20 transition-all hover:shadow-lg hover:shadow--[#d9dee4]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={() => setStep(activeStep - 1)}
            >
              Previous
            </button>
          )}
          {activeStep !== steps.length - 1 && activeStep !== steps.length - 1 - 1 && (
            <button
              className="middle none center rounded-lg bg-black bg-gradient-to-tl from-gray-900 to-slate-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={() => setStep(activeStep + 1)}
            >
              Next
            </button>
          )}
          {activeStep === steps.length - 1 - 1 && (
            <button
              className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={() => setStep(activeStep + 1)}
            >
              Confirm
            </button>
          )}
          {activeStep === steps.length - 1 && (
            <button
              //  className="bg-black rounded-lg text-white text-sm text-center self-center px-3 py-2 flex justify-between"
              // className="middle none center rounded-lg bg-black text-white py-3 px-6 font-sans text-xs font-bold uppercase shadow-md hover:shadow-black/20 flex justify-between"
              className="flex justify-between middle none center rounded-lg bg-black bg-gradient-to-tl from-gray-900 to-slate-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"

              onClick={() => setStep(0)}>
              <span className='text-xl'><HiOutlinePlusCircle /></span>
              <span className='ml-2'>New Product</span>
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default AddProduct;

const Confirmation = () => {
  return (
    <div className="bg-green-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-lg my-4">
      <p className="text-sm font-semibold">Status: Confirmed</p>
      <p className='text-xs'>Your New Product has been successfully confirmed and is now being processed.</p>
    </div>
  )
}