'use client'

import Image from "next/image"
import {
    DownChevron,
    HamburgerX,
    NavLinks,
    ServicesLinks 
} from "@/components"
import Link from "next/link"
import { useState } from "react"

const Header = () => {
    const [open, setOpen] = useState(false)
    const [subnavOpen, setSubnavOpen] = useState(false)

    const handleClick = () => {
        open ? setOpen(false) : setOpen(true)
    }

    const handleMouseOver = () => {
        setSubnavOpen(true)
    }

    const handleMouseOut = () => {
        setSubnavOpen(false)
    }

    return (
        <header className='w-full bg-bright-gray z-[100] sticky top-0'>
            <div className='md:max-w-6xl mx-auto w-full py-4 px-2 flex justify-between'>
                <button className='md:hidden' onClick={() => handleClick()}>
                    <HamburgerX open={open} />
                </button>
                <div className='flex items-center gap-4 mx-auto md:mx-0 hover:scale-[105%] transition ease-in duration-150'>
                    <Link 
                        href='/'
                    >
                        <Image 
                            src='/logo-png/logo-purple.png'
                            width={5000}
                            height={3000}
                            alt='Prime Web Solutions Logo'
                            className="max-w-[80px]"
                            priority
                        />
                    </Link>
                </div>
                <nav className='md:flex flex-row-reverse items-center gap-10 hidden'>
                    {NavLinks.map((link, i) => (
                        <div key={i} className='relative'>
                            {link.title == 'Services' ? (
                                <div className='hover:cursor-pointer' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                    <span>
                                        <Link  
                                            href={link.href} 
                                            className='uppercase text-prime-purple-700 hover:text-prime-purple-500 transition ease-in-out duration-200 font-bold'
                                        >{link.title}</Link><DownChevron subnavOpen={subnavOpen} color="#561670" /></span>
                                    <div className={`subnav-dropdown ${subnavOpen ? 'scale-y-100' : 'scale-y-0'}`}>
                                        {ServicesLinks.map((link, i) => (
                                            <Link 
                                                href={link.href} 
                                                key={i} 
                                                className={`${subnavOpen ? 'opacity-100 delay-300' : 'opacity-0'} text-sm uppercase text-prime-purple-900 hover:text-prime-purple-500 transition-opacity ease-in duration-150 font-semibold`}
                                            >{link.title}</Link>
                                        ))}
                                    </div>
                                </div>
                            ): (
                                <Link href={link.href} className='uppercase hover:text-prime-purple-500 text-prime-purple-700 transition ease-in-out duration-200 font-bold'>{link.title}</Link>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    )
}
export default Header