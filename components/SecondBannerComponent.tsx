import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const SecondBannerComponent = () => {
  return (
    <div className='px-20 mt-28 w-full'>
        <div className='flex flex-row p-14 bg-black dark:bg-slate-500 rounded'>
        <div className='flex-1 flex flex-col gap-6'>
            <span className='text-[#00FF66] text-lg'>Categories</span>
            <p className='text-white dark:text-black font-bold text-3xl text-wrap'>Enhance Your </p>
            <p className='text-white dark:text-black font-bold text-3xl text-wrap'>Music Experience</p>
            <div className='flex flex-row items-center gap-8'>
                <div className='flex flex-col items-center justify-center rounded-full w-16 h-16 bg-white text-black'>
                    <span className='text-xs font-semibold'>23</span>
                    <span className='text-sm'>Hours</span>
                </div>
                <div className='flex flex-col items-center justify-center rounded-full w-16 h-16 bg-white text-black'>
                    <span className='text-xs font-semibold'>05</span>
                    <span className='text-sm'>Days</span>
                </div>
                <div className='flex flex-col items-center justify-center rounded-full w-16 h-16 bg-white text-black'>
                    <span className='text-xs font-semibold'>59</span>
                    <span className='text-sm'>Minutes</span>
                </div>
                <div className='flex flex-col items-center justify-center rounded-full w-16 h-16 bg-white text-black'>
                    <span className='text-xs font-semibold'>35</span>
                    <span className='text-sm'>Seconds</span>
                </div>
            </div>
            <Button className='bg-[#00FF66] rounded-[4px] h-9 w-24 flex items-center justify-center hover:bg-green-500'>Buy Now</Button>
        </div>
        <div className='flex-1'>
            <Image src={"/JBL.png"} width={256} height={256} alt='Second banner image' className='object-cover w-full h-full' />
        </div>
        </div>
    </div>
  )
}

export default SecondBannerComponent