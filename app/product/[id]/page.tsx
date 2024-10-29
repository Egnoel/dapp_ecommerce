import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Heart, RefreshCw, Star, Truck } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ForYouComponent from '@/components/ForYouComponent';

const page = () => {
  return (
    <div className="px-20 flex flex-col mt-7 gap-6">
      <div className="flex flex-row gap-2 text-gray-400">
        <span>Account</span>
        <span>/</span>
        <span>Gaming</span>
        <span>/</span>
        <span className="text-black dark:text-white">
          Havic HV G-92 Gamepad
        </span>
      </div>
      <div className="mt-11 flex flex-row gap-16 w-full">
        <div className="w-[10%] flex flex-col justify-between">
          <Image
            src={'/gamepad1.png'}
            alt="product"
            width={125}
            height={125}
            className="object-cover w-full"
          />
          <Image
            src={'/gamepad2.png'}
            alt="product"
            width={125}
            height={125}
            className="object-cover w-full"
          />
          <Image
            src={'/gamepad3.png'}
            alt="product"
            width={125}
            height={125}
            className="object-cover w-full"
          />
          <Image
            src={'/gamepad4.png'}
            alt="product"
            width={125}
            height={125}
            className="object-cover w-full"
          />
        </div>
        <div className="w-[40%] bg-gray-400 flex justify-center px-2 py-4">
          <Image
            src="/gamepadFull.png"
            alt="gamepad"
            width={90}
            height={90}
            className="object-contain w-[90%] h-[90%]"
          />
        </div>
        <div className="w-[40%] flex flex-col gap-5">
          <span className="font-bold text-2xl">Havic HV G-92 Gamepad</span>
          <div className="flex flex-row gap-3 items-center">
            <span className="flex flex-row gap-1">
              <Star className="text-yellow-400 w-3 h-3" />
              <Star className="text-yellow-400 w-3 h-3" />
              <Star className="text-yellow-400 w-3 h-3" />
              <Star className="text-yellow-400 w-3 h-3" />
              <Star className="text-gray-400 w-3 h-3" />
            </span>
            <span className="text-gray-400 text-xs">(150 reviews)</span>
            <Separator orientation="vertical" className="bg-gray-400" />
            <span className="text-[#00FF66] text-xs">In Stock</span>
          </div>
          <span className="font-medium">$192.00</span>
          <p className="text-wrap text-sm">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <Separator orientation="horizontal" className="bg-gray-500" />
          <div className="flex flex-row gap-4 items-center text-sm">
            <span>Colours: </span>
            <RadioGroup
              defaultValue="option-one"
              orientation="horizontal"
              className="flex flex-row gap-2 items-center"
            >
              <RadioGroupItem
                value="option-one"
                id="option-one"
                className="bg-[#A0BCE0]"
              />

              <RadioGroupItem
                value="option-two"
                id="option-two"
                className="bg-[#E07575]"
              />
            </RadioGroup>
          </div>
          <div className="flex flex-row gap-4 items-center text-sm">
            <span>Sizes: </span>
            <div className="flex flex-row gap-2 items-center">
              <span className="py-1 px-2 border shadow">XS</span>
              <span className="py-1 px-2 border shadow">S</span>
              <span className="py-1 px-2 border shadow bg-red-500">M</span>
              <span className="py-1 px-2 border shadow">L</span>
              <span className="py-1 px-2 border shadow">XL</span>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-row">
              <span className="border rounded-l py-1 px-4 border-gray-300">
                -
              </span>
              <Input
                type="text"
                className="border-t border-b border-l-0 border-r-0 border-gray-300 w-24 text-center"
                placeholder="2"
              />
              <span className="border rounded-r py-1 px-4 bg-red-500 border-red-500 text-white">
                +
              </span>
            </div>
            <Button className="bg-red-500 hover:bg-red-400 py-2 px-6 text-white">
              Buy Now
            </Button>
            <div className="border rounded py-2 px-2">
              <Heart />
            </div>
          </div>
          <div className="flex flex-col gap-4 border text-sm">
            <div className="flex flex-row gap-3 items-center px-2 py-1">
              <span>
                <Truck />
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-lg">Free Delivery</span>
                <span className="underline">
                  Enter your postal code for delivery availability
                </span>
              </div>
            </div>
            <Separator orientation="horizontal" className="bg-gray-400" />
            <div className="flex flex-row gap-3 items-center px-2 py-1">
              <span>
                <RefreshCw />
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-lg">Return Delivery</span>
                <span>
                  Free 30 days delivery return.{' '}
                  <span className="underline">Details</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ForYouComponent />
    </div>
  );
};

export default page;
