export const HamburgerX = ({ open = false }: { open: boolean }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
        >
        {/* Hamburger icon */}
        <path 
            className={open ? 'hidden' : ''}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
        {/* X Icon */}
        <path className={!open ? 'hidden': ''} strokeLinecap="round" strokeLinejoin="round" d='M6 18L18 6M6 6l12 12' />
        </svg>
    )
}

export const DownChevron = ({ size = 25, subnavOpen=false, color='#000' }: { size?: number, subnavOpen: boolean, color?: string }) => {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            width={size}
            height={size}
            color={color}
            className={`${subnavOpen ? 'rotate-180' : ''} inline mt-1 ml-1 transition-transform duration-200 ease-in-out transform md:-mt-1`}
        >
            <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule='evenodd'
            >
            </path>
        </svg>
    )
}