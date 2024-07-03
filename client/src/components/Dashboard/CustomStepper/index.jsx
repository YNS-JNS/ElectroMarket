import React from 'react';
// Packages:
import Stepper from 'react-stepper-horizontal';
// Styles:
import './CustomStepper.css'; // Import custom CSS for animations

const CustomStepper = (props) => {
    return (
        // Render the Stepper component with the provided props and customized colors and styles
        <Stepper
            {...props} 
            activeColor="#171717"
            defaultColor="#eee"
            completeColor="#171717"
            activeTitleColor="#171717"
            completeTitleColor="#171717"
            defaultTitleColor="#bbb"
            circleFontSize={0} // Hide circle text
            completeBarColor="#171717"
        />
    );
};

export default CustomStepper;