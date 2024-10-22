import { Headset, ShieldCheck, Truck } from 'lucide-react'
import React from 'react'

const PoliciesComponent = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-24 w-full px-20 mt-28'>
        <div className='flex flex-col items-center gap-3'>
            <div className='rounded-full flex items-center justify-center bg-slate-300 w-20 h-20'>
                <div className='rounded-full flex items-center justify-center bg-black w-16 h-16 text-white'>
                <Truck />
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='font-bold text-lg'>FREE AND FAST DELIVERY</h1>
                <span className='text-sm'>Free delivery for all orders over $140</span>
            </div>
        </div>
        <div className='flex flex-col items-center gap-3'>
            <div className='rounded-full flex items-center justify-center bg-slate-300 w-20 h-20'>
                <div className='rounded-full flex items-center justify-center bg-black w-16 h-16 text-white'>
                    <Headset />
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='font-bold text-lg'>24/7 CUSTOMER SERVICE</h1>
                <span className='text-sm'>Firendly 24/7 customer support</span>
            </div>
        </div>
        <div className='flex flex-col items-center gap-3'>
            <div className='rounded-full flex items-center justify-center bg-slate-300 w-20 h-20'>
                <div className='rounded-full flex items-center justify-center bg-black w-16 h-16 text-white'>
                    <ShieldCheck />
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='font-bold text-lg'>MONEY BACK GUARANTEE</h1>
                <span className='text-sm'>We return money within 30 days</span>
            </div>
        </div>
    </div>
  )
}

export default PoliciesComponent