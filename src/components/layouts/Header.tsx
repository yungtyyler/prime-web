'use client'

import Image from "next/image"
import {
    DownChevron,
    HamburgerX,
    NavLinks,
    ServicesLinks 
} from "@/components"
import Link from "next/link"
import { useState, useRef, useEffect, MutableRefObject } from "react"
import { usePathname } from "next/navigation"

const Header = () => {
    const [open, setOpen] = useState(false)
    const [subnavOpen, setSubnavOpen] = useState(false)
    const [sidebarSubnavOpen, setSidebarSubnavOpen] = useState(false)
    const menuref = useRef() as MutableRefObject<HTMLDivElement>
    const pathname = usePathname()

    useEffect(() => {
        setOpen(false)
        setSubnavOpen(false)
        setSidebarSubnavOpen(false)
    }, [pathname])

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuref.current && !menuref.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    
    })

    const handleClick = () => {
        open ? setOpen(false) : setOpen(true)
        setSidebarSubnavOpen(false)
    }

    const handleMouseOver = () => {
        setSubnavOpen(true)
    }

    const handleMouseOut = () => {
        setSubnavOpen(false)
    }

    return (
        <header className='w-full bg-bright-gray z-[100] sticky top-0'>

            {/* Sidebar Nav Menu */}
            <div ref={menuref} className={`sidebar ${open ? 'lg:hidden flex translate-x-0' : '-translate-x-[100%]'}`}>
                <div className={`flex justify-between items-center p-4 ${open ? 'opacity-100 delay-150' : 'opacity-0'} transition-opacity ease-in-out duration-150`}>
                    {/* <Image
                        src={'/logo-png/logo-white.png'}
                        width={5000}
                        height={3000}
                        alt='Prime Web Solutions Logo'
                        className="max-w-[80px]"
                    /> */}
                    <h1 className='text-prime-green-700 text-3xl uppercase font-bold text-start'>Prime Web Solutions</h1>
                    <button className='text-white' onClick={() => handleClick()}>
                        <HamburgerX open={open} />
                    </button>
                </div>
                <div className='flex flex-col-reverse items-start gap-8 py-14 border-b border-gray-600'>
                    {NavLinks.map(((link, i) => (
                        <div key={i} className='w-full text-start'>
                            {link.title == 'Services' ? (
                                <div className='w-full'>
                                    <span className='flex items-center justify-between' onClick={() => setSidebarSubnavOpen((curr) => !curr)}>
                                        <Link 
                                            href={link.href} 
                                            className='text-white hover:text-prime-green-500 text-xl px-2'
                                        >
                                            {link.title}
                                        </Link>
                                        <DownChevron subnavOpen={sidebarSubnavOpen} color="white" />
                                    </span>
                                    <div className={`${sidebarSubnavOpen ? 'scale-y-100 block' : 'scale-y-0 fixed'} sidebar-subnav-dropdown`}>
                                        {ServicesLinks.map((link, i) => (
                                            <Link 
                                                href={link.href} 
                                                key={i} 
                                                className={`${sidebarSubnavOpen ? 'opacity-100' : 'opacity-0'} uppercase hover:text-prime-green-700 transition-opacity ease-in duration-150 font-semibold`}
                                            >{link.title}</Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link 
                                    href={link.href}
                                    className='hover:text-prime-green-500 text-xl px-2'
                                >
                                    {link.title}
                                </Link>
                            )}
                        </div>
                    )))}
                </div>
            </div>
            
            {/* Desktop Nav Menu */}
            <div className='md:max-w-6xl mx-auto w-full p-4 flex justify-between'>
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
                                            className='uppercase text-prime-purple-500 hover:text-prime-purple-700 transition ease-in-out duration-200 font-bold'
                                        >{link.title}</Link><DownChevron subnavOpen={subnavOpen} color="#561670" /></span>
                                    <div className={`subnav-dropdown ${subnavOpen ? 'scale-y-100' : 'scale-y-0'}`}>
                                        {ServicesLinks.map((link, i) => (
                                            <Link 
                                                href={link.href} 
                                                key={i} 
                                                className={`${subnavOpen ? 'opacity-100 delay-300' : 'opacity-0'} text-sm uppercase text-prime-purple-700 transition-opacity ease-in duration-150 font-semibold`}
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