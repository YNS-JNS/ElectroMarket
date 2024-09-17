import React from 'react';

const Spinner = () => {
    return (
        <>
            <div className="p-12 flex">
                <span className="m-auto loading loading-ring loading-lg"></span>
            </div>
        </>
    )
}

export default Spinner;