import Link from 'next/link';

const LoginButton = ({ sidebar }: { sidebar?: boolean }) => {
  return (
    <button
      className={`border border-prime-eerie-black ${
        sidebar
          ? 'text-prime-eerie-black bg-white hover:bg-prime-saffron'
          : ' text-prime-eerie-black bg-white hover:bg-prime-saffron dark:text-prime-saffron dark:bg-prime-jet dark:hover:bg-prime-eerie-black'
      } px-4 py-2 rounded-xl font-bold uppercase transition ease-in-out duration-200 hover:-rotate-6`}
    >
      <Link href="/auth/login">Login</Link>
    </button>
  );
};
export default LoginButton;
