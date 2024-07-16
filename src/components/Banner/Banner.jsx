import React from 'react'
import Card from '../Card/Card'
import Navbar from '../Navbar/Navbar'

export default function Banner({latestVideo}) {
    return (
        <header className='w-100 flex flex-col items-center justify-center h-96 inset-0 bg-banner-image bg-cover bg-center'>
            {latestVideo ? <div className='relative w-full z-10 bg-black bg-opacity-50 h-full flex items-center justify-center'>
                <h1 className='absolute top-0 left-0 m-5 text-white text-2xl  font-bold drop-shadow-xl'>Subido Recientemente</h1>
                <Card className='' video={latestVideo} />
            </div>: <></>}
        </header>
    )
}
