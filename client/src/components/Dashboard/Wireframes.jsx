import React from 'react'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight, HiOutlinePlusCircle } from 'react-icons/hi'
import CustomButton from '../Ui/CustomButton'

const Wireframes = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='my-5 text-xl font-medium text-black'>Wireframes</h1>
            <p>Welcome to the UI Management Wireframes</p>
            <div className='my-5 flex flex-row items-center justify-center gap-5'>
                <CustomButton
                    label="Button"
                    //  icon={HiOutlinePlusCircle}
                    onClick={() => console.log("New Product")}
                    variant='primary'

                />
                <CustomButton
                    label="Button"
                    //  icon={HiOutlinePlusCircle}
                    onClick={() => console.log("New Product")}
                    variant='secondary'

                />
                <CustomButton
                    label="Button"
                    //  icon={HiOutlinePlusCircle}
                    onClick={() => console.log("New Product")}
                    variant='ghost'

                />
                <CustomButton
                    label="Button"
                    //  icon={HiOutlinePlusCircle}
                    onClick={() => console.log("New Product")}
                    variant='black'

                />
                <CustomButton
                    label="Button"
                    //  icon={HiOutlinePlusCircle}
                    onClick={() => console.log("New Product")}
                    variant='success'

                />
                <CustomButton
                    label="Button"
                    //  icon={HiOutlinePlusCircle}
                    onClick={() => console.log("New Product")}
                    disabled={true}

                />
            </div>

            {/* With icons */}
            <div className='mt-5 flex flex-row items-center justify-center gap-5'>
                <CustomButton
                    label="Button"
                    leftIcon={HiOutlinePlusCircle}
                    onClick={() => console.log("New Product")}
                    variant='primary'

                />
                <CustomButton
                    label="Button"
                    leftIcon={HiOutlinePlusCircle}
                    onClick={() => console.log("New Product")}
                    variant='secondary'

                />
                <CustomButton
                    label="Button"
                    leftIcon={HiOutlinePlusCircle}
                    onClick={() => console.log("New Product")}
                    variant='ghost'

                />
                <CustomButton
                    label="Button"
                    leftIcon={HiOutlinePlusCircle}
                    onClick={() => console.log("New Product")}
                    variant='black'

                />
                <CustomButton
                    label="Button"
                    leftIcon={HiOutlinePlusCircle}
                    onClick={() => console.log("New Product")}
                    variant='success'

                />
                <CustomButton
                    label="Button"
                    leftIcon={HiOutlinePlusCircle}
                    onClick={() => console.log("New Product")}
                    disabled={true}

                />
            </div>

            {/* With left and right icon */}
            <div className='mt-5 flex flex-row items-center justify-center gap-5'>
                <CustomButton
                    label="Prev"
                    leftIcon={HiOutlineArrowSmLeft}
                    onClick={() => console.log("New Product")}
                    variant='secondary'

                />
                <CustomButton
                    label="Next"
                    rightIcon={HiOutlineArrowSmRight}
                    onClick={() => console.log("New Product")}
                    variant='primary'
                />
            </div>
        </div>
    )
}

export default Wireframes