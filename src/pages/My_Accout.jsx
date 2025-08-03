import React from 'react'
import Navbar from '../component/Navbar';

function My_Accout() {
    
    const email = sessionStorage.getItem("Email");
    
    return (
        <>
            <Navbar />
            <h1 className='mt-40'>This is My Account <p className='font-bold'>{email}</p></h1>
        </>   
    )
}

export default My_Accout
