import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone } from 'lucide-react';
import React from 'react';

const page = () => {
  return (
    <div className="px-20 flex flex-col mt-7 gap-6">
      <div className="flex flex-row gap-2 text-gray-400">
        <span>home</span>
        <span>/</span>
        <span className="text-black dark:text-white">Contact</span>
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="w-[25%] flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2">
            <span className="rounded-full bg-red-500 p-2">
              <Phone />
            </span>
            <span className="">Call To Us</span>
          </div>
          <span>We are available 24/7, 7 days a week</span>
          <span>Phone: +8800</span>
          <Separator />
          <div className="flex flex-row items-center gap-2">
            <span className="rounded-full bg-red-500 p-2">
              <Mail />
            </span>
            <span className="">Write To Us</span>
          </div>
          <span>Fill Out Form And We Will Contact You Within 24 hours</span>
          <span>example@hotmail.com</span>
          <span>suporte@example.com</span>
        </div>
        <div className="w-[65%] flex flex-col gap-10">
          <div className="w-full flex flex-row gap-5">
            <Input type="text" placeholder="Name" className="rounded" />
            <Input type="email" placeholder="Email" className="rounded" />
            <Input type="text" placeholder="Phone" className="rounded" />
          </div>
          <Textarea placeholder="Your Message" className="h-48 rounded" />
          <div className="flex justify-end">
            <Button className="bg-red-500 hover:bg-red-400 rounded p-5">
              {' '}
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
