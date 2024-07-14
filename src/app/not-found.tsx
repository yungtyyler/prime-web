import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="h-full py-[200px] dark:text-white text-prime-eerie-black flex flex-col items-center justify-center gap-4">
      <h1 className="text-[2em] font-bold">404 - Page Not Found</h1>
      <Link
        href="/"
        className="px-4 py-2 bg-prime-saffron-700 text-black font-bold uppercase rounded hover:shadow-lg hover:brightness-95"
      >
        Return Home
      </Link>
    </div>
  );
};
export default NotFound;
