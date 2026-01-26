import React from 'react'

function Preloader() {
    return (

        <div className='w-full h-screen flex justify-center items-center bg-black'>
            <img className='w-100 h-100' src="/load.gif" alt="gif" />
        </div>

    )
}

export default Preloader