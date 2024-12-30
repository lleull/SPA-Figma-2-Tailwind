import React from 'react'

const CustomEmailInput = () => {
    return (
        <div className='flex flex-row items-center h-12 bg-black' >
            <input className='h-full pl-4' type="text" placeholder='Enter your email' />
            <button className='bg-black h-full text-white ml-5 mr-5'>Get Started</button>
        </div>
    )
}

export default CustomEmailInput