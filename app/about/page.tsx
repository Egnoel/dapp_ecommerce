import Image from 'next/image';
import React from 'react';
import {
  DollarSign,
  Instagram,
  Landmark,
  Linkedin,
  ShoppingBag,
  Store,
  Twitter,
} from 'lucide-react';
import PoliciesComponent from '@/components/PoliciesComponent';

const page = () => {
  const persons = [
    {
      id: 1,
      name: 'Tom Cruise',
      image: '/cruise.png',
      role: 'Founder & Chairman',
    },
    {
      id: 1,
      name: 'Emma Watson',
      image: '/watson.png',
      role: 'Managing director',
    },
    {
      id: 1,
      name: 'Will Smith',
      image: '/smith.png',
      role: 'Product Designer',
    },
  ];
  return (
    <div className="px-20 flex flex-col mt-7 gap-6">
      <div className="flex flex-row gap-2 text-gray-400">
        <span>home</span>
        <span>/</span>
        <span className="text-black dark:text-white">About</span>
      </div>
      <div className="w-full flex flex-row gap-12 mt-8">
        <div className="flex  flex-1 items-center justify-center">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-2xl mt-1">Our Story</h1>
            <p className="text-wrap">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="text-wrap">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Image
            src="/about.png"
            alt="about"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-9 flex flex-row items-center justify-between">
        <div className="flex flex-col items-center justify-center w-44 h-44 rounded border border-gray-200 dark:border-gray-600">
          <div className="rounded-full w-12 h-12 flex items-center justify-center bg-gray-400">
            <div className="rounded-full w-9 h-9 flex items-center justify-center bg-black">
              <Store className=" text-white" />
            </div>
          </div>
          <span className="font-bold text-lg">10.5K</span>
          <span className="text-xs">Salles active on our site</span>
        </div>
        <div className="flex flex-col items-center justify-center w-44 h-44 rounded border border-gray-200 dark:border-gray-600 bg-red-500 text-white">
          <div className="rounded-full w-12 h-12 flex items-center justify-center bg-gray-400">
            <div className="rounded-full w-9 h-9 flex items-center justify-center bg-white">
              <DollarSign className=" text-black" />
            </div>
          </div>
          <span className="font-bold text-lg">33K</span>
          <span className="text-xs">Monthly products sale</span>
        </div>
        <div className="flex flex-col items-center justify-center w-44 h-44 rounded border border-gray-200 dark:border-gray-600">
          <div className="rounded-full w-12 h-12 flex items-center justify-center bg-gray-400">
            <div className="rounded-full w-9 h-9 flex items-center justify-center bg-black">
              <ShoppingBag className=" text-white" />
            </div>
          </div>
          <span className="font-bold text-lg">45.5K</span>
          <span className="text-xs">Customers active on our site</span>
        </div>
        <div className="flex flex-col items-center justify-center w-44 h-44 rounded border border-gray-200 dark:border-gray-600">
          <div className="rounded-full w-12 h-12 flex items-center justify-center bg-gray-400">
            <div className="rounded-full w-9 h-9 flex items-center justify-center bg-black">
              <Landmark className=" text-white" />
            </div>
          </div>
          <span className="font-bold text-lg">25K</span>
          <span className="text-xs">Annual gross on our site</span>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-44 mt-16">
        {persons.map((person, index) => (
          <div className="flex flex-col w-full" key={index}>
            <div className="flex items-center justify-center bg-gray-400 h-[60%]">
              <Image
                src={person.image}
                alt="Smith"
                width={125}
                height={125}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold">{person.name}</span>
              <span className="text-xs">{person.role}</span>
              <div className="flex flex-row gap-4">
                <Twitter className="w-5 h-5" />
                <Instagram className="w-5 h-5" />
                <Linkedin className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <PoliciesComponent marginTop={12} />
    </div>
  );
};

export default page;
