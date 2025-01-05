import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center bottom-0 w-full'>
            <div className='logo font-bold text-white text-2xl '>
                <span className='text-green-500'>&lt;</span>
                Pass
                <span className='text-green-500'>OP/&gt;</span>
            </div>
            <div className='flex justify-center items-center '>
            Created with <img className='w-6' src="/icons/heart.png" alt="github" /> by Mr. Shyam
            </div>
        </div>
    )
}

export default Footer
