import React, { useState } from 'react';
// Packages:
import classNames from 'classnames';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight, HiOutlinePlusCircle } from 'react-icons/hi'
// Components:
import CustomStepper from '../CustomStepper';
import ProductInfo from '../Widgets/ProductInfo';
import ProductPrice from '../Widgets/ProductPrice';
import ProductMedia from '../Widgets/ProductMedia';
import CustomButton from '../../Ui/CustomButton';


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
    <div className='container mx-auto w-2/3 flex flex-col gap-3 '>
      <CustomStepper steps={steps} activeStep={activeStep} />
      <section className="min-w-full mx-auto h-auto flex flex-col justify-between p-4 mb-4 bg-white rounded-xl shadow-lg">
        <form className={classNames('transition-container', { 'animate-fade': animate })}>
          {getSectionComponent(activeStep)}
        </form>
        <div className={`w-full mt-4 flex ${activeStep === 0 || activeStep === steps.length - 1 ? 'justify-end' : 'justify-between'} `}>

          {/* Previous button */}
          {activeStep !== 0 && activeStep !== steps.length - 1 && (
            <div className='flex gap-2'>
              <CustomButton
                label="Prev"
                leftIcon={HiOutlineArrowSmLeft}
                onClick={() => setStep(activeStep - 1)}
                variant='secondary'
              />
            </div>
          )}

          {/* Next button */}
          {activeStep !== steps.length - 1 && activeStep !== steps.length - 1 - 1 && (
            <div className='flex gap-2'>
              <CustomButton
                label="Next"
                rightIcon={HiOutlineArrowSmRight}
                onClick={() => setStep(activeStep + 1)}
                variant='primary'
              />
            </div>
          )}

          {/* Confirm button */}
          {activeStep === steps.length - 1 - 1 && (
            <CustomButton
              label="Confirm"
              onClick={() => setStep(activeStep + 1)}
              variant='success'
            />
          )}

          {/* Add new product button */}
          {activeStep === steps.length - 1 && (
            <CustomButton
              label="New Product"
              leftIcon={HiOutlinePlusCircle}
              onClick={() => setStep(0)}
              variant='black'
            />
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