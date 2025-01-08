import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [ham, setham] = useState(true)
    const hamBurger = () => {
        setham(!ham)
    }
    return (
        <>
            <nav className='bg-slate-200 py-6 w-full fixed left-0 right-0 top-0 z-50'>
                <div className='flex justify-around items-center w-full px-5 md:px-11 relative'>
                    <div className='flex items-center  text-[18px] md:text-[20px] w-full relative'>
                        <NavLink to="/" className='flex items-center '>
                            <img src="/logo.webp" alt="logo" className='h-[50px]' />
                            <h2 className='font-semibold text-[25px] md:text-[28px] 2xl:text-[30px] '>Roam & Explore</h2>
                        </NavLink>
                    </div>
                    <div className='text-2xl md:hidden block cursor-pointer' onClick={hamBurger}>
                        {ham ? <RxHamburgerMenu /> : ''}
                    </div>
                    <ul className={`${ham?'right-[-100%]':'right-0 z-50'} bg-white z-50 md:z-auto md:bg-transparent flex justify-evenly flex-col md:flex-row top-[-30px] h-[300px] md:h-auto  w-[200px] md:w-auto items-center md:gap-[60px] text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[22px] absolute md:static ease-out duration-[0.4s]`}>
                    <li className='ml-[100px] text-2xl md:hidden block cursor-pointer' onClick={()=>setham(!ham)}>
                        {ham?'':<RxCross2 />}
                        </li>
                        <li className='tracking-[1px]'>
                            <NavLink to="/" className={({isActive})=>isActive?'text-teal-500':'text-black'}>Home</NavLink>
                        </li>
                        <li className='tracking-[1px]'>
                            <NavLink to="/destinations" className={({isActive})=>isActive?'text-teal-500':'text-black'}>Destination</NavLink>
                        </li>
                        <li className='tracking-[1px]'>
                            <NavLink to="/transport" className={({isActive})=>isActive?'text-teal-500':'text-black'}>Transport</NavLink>
                        </li>
                        <li className='tracking-[1px]'>
                            <NavLink to="/tour" className={({isActive})=>isActive?'text-teal-500':'text-black'}>Tour</NavLink>
                        </li>
                        <li className='tracking-[1px]'>
                            <NavLink to="/trekking" className={({isActive})=>isActive?'text-teal-500':'text-black'}>Trekking</NavLink>
                        </li>
                        <li className='tracking-[1px]'>
                            <NavLink to="/contactpage" className={({isActive})=>isActive?'text-teal-500':'text-black'}>Contact</NavLink>
                        </li>
                        

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar