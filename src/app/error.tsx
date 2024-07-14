'use client'; // Error components must be Client Components

import { useEffect } from 'react';

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-full py-[200px] dark:text-white text-prime-eerie-black flex flex-col items-center justify-center gap-4">
      <h2 className="text-[2em] font-bold">Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="px-4 py-2 bg-prime-saffron-700 text-black font-bold uppercase rounded hover:shadow-lg hover:brightness-95"
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
