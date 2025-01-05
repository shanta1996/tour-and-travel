import React from 'react'

const Navbar = () => {
    return (
        <>
        
        <nav className='bg-slate-200 py-6 w-[100%] fixed left-0 right-0 top-0 z-10'>
            <div className='flex justify-around items-center  px-11'>
            <div className='flex items-center  text-[18px] md:text-[20px] w-[100%] relative'>
                <a href=""  className='flex items-center '>
                <img src="/logo.webp" alt="logo" className='h-[50px]' />
                <h2 className='font-semibold text-[20px] sm:text-[23px] md:text-[25px] xl:text-[28px] 2xl:text-[30px] '>Roam & Explore</h2>
                </a>
            </div>
            <ul className='flex items-center gap-[100px] text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[22px]'>
                <li className='tracking-[1px]'>
                <a href="">Destination</a>
                </li>
                <li className='tracking-[1px]'>
                <a href="">Transport</a>
                </li>
                <li className='tracking-[1px]'>
                <a href="">Tour</a>
                </li>
                <li className='tracking-[1px]'>
                <a href="">Trekking</a>
                </li>
                
              
            </ul>
            </div>
        </nav>
        

            {/* <nav className=' bg-slate py-6  w-[100%] fixed left-0 right-0 top-0 z-10 '>
                <div className='flex items-center justify-around text-[18px] md:text-[20px] w-[100%] relative'>
                    <Link to="" className='flex items-center gap-[10px] font-semibold text-[20px] sm:text-[25px] md:text-[30px] xl:text-[35px] 2xl:text-[40px]'>
                        <img className='h-[50px]' src="https://i.pinimg.com/564x/48/e5/9e/48e59ef6ef580dad0e44420cf79f1f7a.jpg" alt="logo" />
                        <Link to="/home">READBLOOM</Link>
                    </Link>
                    <div>
                        <Link to="">ABOUT US</Link>
                    </div>
                    <div className='category '>
                        <Link to="" >CATEGORIES</Link>
                    </div>
                    <div className='flex items-center gap-[10px]'>
                        <input type="text" name="search" id="search" placeholder='SEARCH YOUR BOOKS HERE' className='md:w-[300px] xl:w-[500px] border-2 border-solid border-black p-2 rounded-2xl md:block text-[18px] md:text-[20px]' />
                        <button type='button'>
                            <i className="fa-solid fa-magnifying-glass text-[18px] md:text-[20px]"></i>
                        </button>

                    </div>
                </div>
            </nav> */}
        </>
    )
}

export default Navbar