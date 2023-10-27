import Image from "next/image"
import { NavLinks } from "@/components"

const Header = () => {
    return (
        <header className='w-full bg-gray-300'>
            <nav className='max-w-6xl mx-auto flex items-center justify-between p-4'>
                <div className='flex items-center gap-4'>
                    <Image 
                        src='/logo-png/logo-purple.png'
                        width={5000}
                        height={3000}
                        alt='Prime Web Solutions Logo'
                        className="w-[100px]"
                        priority
                    />
                </div>
                <div className='flex items-center gap-4'>
                    {NavLinks.map((link, i) => (
                        <a 
                            href={link.href}
                            key={i}
                            className='text-prime-purple-700 text-xl font-bold hover:text-prime-purple-500 transition-colors duration-300'
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    )
}
export default Header