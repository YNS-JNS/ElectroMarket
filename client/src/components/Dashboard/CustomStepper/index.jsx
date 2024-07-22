import React from 'react';
// Packages:
import Stepper from 'react-stepper-horizontal';
// Styles:
import './CustomStepper.css'; // Import custom CSS for animations

const CustomStepper = (props) => {
    return (
        <div className='stepper-background'>
            {/* Render the Stepper component with the provided props and customized colors and styles */}
            <Stepper
                {...props}
                activeColor="#283142"
                defaultColor="#eee"
                completeColor="#283142"
                activeTitleColor="#283142"
                completeTitleColor="#283142"
                defaultTitleColor="#bbb"
                circleFontSize={0} // Hide circle text
                completeBarColor="#283142"
            />
        </div>
    );
};

export default CustomStepper;