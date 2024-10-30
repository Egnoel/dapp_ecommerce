import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <span className="font-semibold text-2xl">Login To Exclusive</span>
        <span className="text-sm">Enter Your Details Bellow</span>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          className="border border-b border-b-gray-400 border-t-white border-l-white border-r-white   dark:border-t-black dar:border-l-black dark:border-r-black text-gray-400 focus:border-blue-500 focus:outline-none outline-none"
          placeholder="Name"
        />
        <Input
          type="password"
          className="border border-b border-b-gray-400 border-t-white border-l-white border-r-white dark:border-t-black dar:border-l-black dark:border-r-black text-gray-400"
          placeholder="Password"
        />
      </div>
      <div className="flex flex-row justify-between">
        <Button className="bg-red-500 px-4 py-2 rounded hover:bg-red-400">
          Log In
        </Button>
        <Button className="text-red-500">Forgot Password?</Button>
      </div>
    </div>
  );
};

export default page;
