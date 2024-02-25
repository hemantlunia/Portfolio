import React from 'react'

function Error() {
    return (
        <>
            <div className="flex justify-center items-center h-screen bg-blue-900">
                <div className="text-center p-8 bg-white rounded shadow-md">
                    <h1 className="text-5xl text-red-500 font-bold mb-4">404</h1>
                    <p className="text-lg text-gray-800 mb-4">Page Not Found</p>
                    <p className="text-base text-gray-600">Please try again later or contact support.</p>
                </div>
            </div>
        </>
    )
}

export default Error
