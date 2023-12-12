import { Oswald, Roboto } from 'next/font/google';

export const oswald = Oswald({
    subsets: ['latin-ext'],
    display: 'swap',
});

export const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin-ext'],
    style: ['normal', 'italic'],
});