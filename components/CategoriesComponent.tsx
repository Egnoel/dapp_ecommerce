import React from 'react'
import { ArrowLeft, ArrowRight, Camera, Gamepad, Headphones, LaptopMinimal, Smartphone, Watch } from 'lucide-react'
import { Separator } from "@/components/ui/separator"

const CategoriesComponent = () => {
  return (
    <div className='px-20 flex flex-col  mt-28'>
        <div className='flex flex-row items-center gap-3 text-red-500'>
            <p className='h-6 w-3 bg-red-500'></p>
            <p>Categories</p>
        </div>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row gap-16 items-center pt-4'>
                <p className='text-xl font-bold'>Browse by Categories</p>
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <span className='w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center'>
                    <ArrowLeft />
                </span>
                <span className='w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center'>
                    <ArrowRight />
                </span>
            </div>
        </div>
        <div className='mt-9 flex flex-row items-center justify-between'>
            <div className='flex flex-col items-center justify-center w-32 h-32 rounded border border-gray-200 dark:border-gray-600'>
                <Smartphone  />
                <span>Phone</span>
            </div>
            <div className='flex flex-col items-center justify-center w-32 h-32 rounded border border-gray-200 dark:border-gray-600'>
                <LaptopMinimal />
                <span>Computers</span>
            </div>
            <div className='flex flex-col items-center justify-center w-32 h-32 rounded border border-gray-200 dark:border-gray-600'>
                <Watch />
                <span>Watches</span>
            </div>
            <div className='flex flex-col items-center justify-center w-32 h-32 rounded border border-gray-200 dark:border-gray-600 bg-red-500 text-white'>
                <Camera />
                <span>Camera</span>
            </div>
            <div className='flex flex-col items-center justify-center w-32 h-32 rounded border border-gray-200 dark:border-gray-600'>
                <Headphones />
                <span>HeadPhones</span>
            </div>
            <div className='flex flex-col items-center justify-center w-32 h-32 rounded border border-gray-200 dark:border-gray-600'>
                <Gamepad />
                <span>Gaming</span>
            </div>
        </div>
        <Separator className=' bg-black text-sm dark:bg-gray-600 mt-9' />
    </div>
  )
}

export default CategoriesComponent