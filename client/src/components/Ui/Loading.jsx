import React from 'react';

const Loading = () => {
    return (
        <>
            <div className="p-12 flex min-h-[22rem]">
                <span className="m-auto loading loading-ring loading-lg"></span>
            </div>
        </>
    )
}

export default Loading;