import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="px-20 flex flex-col mt-7 gap-6">
      <div className="flex flex-row gap-2 text-gray-400">
        <span>home</span>
        <span>/</span>
        <span className="text-black dark:text-white">404 Error</span>
      </div>
      <div className="flex flex-col mt-20 items-center justify-center gap-6">
        <span className="font-bold text-8xl">404 Not Found</span>
        <span>Your Visited Page Was Not Found</span>
        <Link
          href="/"
          className="p-2 rounded bg-red-500 mt-5 text-white hover:bg-red-400"
        >
          Back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
