import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import ProductCard from './ProductCard'
import { Separator } from "@/components/ui/separator"

const SalesComponent = () => {
    const products=[
        {
            id: 1,
            name: "HAVIT HV-G92 Gamepad",
            image: "/Frame611.png",
            price: 160,
            discount:40
        },
        {
            id: 2,
            name: "AK-900 Wired Keyboard",
            image: "/keyboard.png",
            price: 1160,
            discount:35
        },
        {
            id: 3,
            name: "IPS LCD Gaming Monitor",
            image: "/monitor.png",
            price: 400,
            discount:30
        },
        {
            id: 4,
            name: "S-Series Comfort Chair",
            image: "/chair.png",
            price: 400,
            discount:25
        },
    ]
  return (
    <div className='px-20 flex flex-col  mt-28'>
        <div className='flex flex-row items-center gap-3 text-red-500'>
            <p className='h-6 w-3 bg-red-500'></p>
            <p>Today's</p>
        </div>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row gap-16 items-center pt-4'>
                <p className='text-xl font-bold'>Flash Sales</p>
                <div className='flex flex-row items-center gap-3'>
                    <div className='flex flex-row items-center'>
                        <div className='flex flex-col items-center'>
                            <span className='text-xs'>Days</span>
                            <span className='font-bold'>03</span>
                        </div>
                        <span className='pl-2 text-red-500'>:</span>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='flex flex-col items-center'>
                            <span className='text-xs'>Hours</span>
                            <span className='font-bold'>23</span>
                        </div>
                        <span className='pl-2 text-red-500'>:</span>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='flex flex-col items-center'>
                            <span className='text-xs'>Minutes</span>
                            <span className='font-bold'>19</span>
                        </div>
                        <span className='pl-2 text-red-500'>:</span>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='flex flex-col items-center'>
                            <span className='text-xs'>Seconds</span>
                            <span className='font-bold'>56</span>
                        </div>
                    </div>
                </div>
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
        <div className='flex flex-row items-center justify-between mt-9'>
        {
            products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))
        }
        </div>
        <div className='w-full flex items-center justify-center mt-9'>
            <span className='text-black dark:text-white bg-red-500 rounded-[4px] h-9 w-36 flex items-center justify-center'>
                View All Products
            </span>
        </div>
        <Separator className=' bg-black text-sm dark:bg-gray-600 mt-9' />
    </div>
  )
}

export default SalesComponent