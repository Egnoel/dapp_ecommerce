import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <span className="font-semibold text-2xl">Create an Account</span>
        <span className="text-sm">Enter Your Details Bellow</span>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          className="border border-b border-b-gray-400 border-t-white border-l-white border-r-white   dark:border-t-black dar:border-l-black dark:border-r-black text-gray-400 focus:border-blue-500 focus:outline-none outline-none"
          placeholder="Name"
        />
        <Input
          type="email"
          className="border border-b border-b-gray-400 border-t-white border-l-white border-r-white   dark:border-t-black dar:border-l-black dark:border-r-black text-gray-400 focus:border-blue-500 focus:outline-none outline-none"
          placeholder="Email"
        />
        <Input
          type="password"
          className="border border-b border-b-gray-400 border-t-white border-l-white border-r-white dark:border-t-black dar:border-l-black dark:border-r-black text-gray-400 focus:border-blue-500 focus:outline-none outline-none"
          placeholder="Password"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Button className="bg-red-500 px-4 py-2 rounded hover:bg-red-400">
          Log In
        </Button>
        <div className="text-center">
          <span>Already Have an Account?</span>{' '}
          <Link href="/login" className="underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
