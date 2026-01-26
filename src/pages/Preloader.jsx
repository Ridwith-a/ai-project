import React from 'react'

function Preloader() {
    return (

        <div className='w-full h-screen flex justify-center items-center bg-black'>
            <img className='w-80 h-80' src="/loading.gif" alt="gif" />
        </div>

    )
}

export default Preloader