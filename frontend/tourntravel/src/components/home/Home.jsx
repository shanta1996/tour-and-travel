import React from 'react'
import ImageCarousel from '../homeSlider/ImageCarousel'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <ImageCarousel />
            {/* DESTINATIONS PART  */}
            <div className='h-[50vh] w-full bg-red-400'>
                <p>Destinatios</p>
                <div className='bg-white flex flex-col'>
                    <Link a="">Nepal</Link>
                    <Link a="">China</Link>
                    <Link a="">Dubai</Link>
                    <Link a="">India</Link>

                </div>
            </div>

        </>
    )
}

export default Home